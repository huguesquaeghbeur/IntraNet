import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import min from 'lodash/min';
import map from 'lodash/map';
import styleConstructor, { HOURS_SIDEBAR_WIDTH } from './style';
import populateEvents, { HOUR_BLOCK_HEIGHT } from './Packer';
import TimelineHours from './TimelineHours';
import EventBlock from './EventBlock';
import NowIndicator from './NowIndicator';
import useTimelineOffset from './useTimelineOffset';
const { width: dimensionWidth } = Dimensions.get('window');
const Timeline = (props) => {
    const { format24h = true, start = 0, end = 24, date, events = [], onEventPress, onBackgroundLongPress, onBackgroundLongPressOut, renderEvent, theme, scrollToFirst, showNowIndicator, scrollOffset, onChangeOffset, eventTapped } = props;
    const scrollView = useRef();
    const calendarHeight = useRef((end - start) * HOUR_BLOCK_HEIGHT);
    const styles = useRef(styleConstructor(theme || props.styles, calendarHeight.current));
    const { scrollEvents } = useTimelineOffset({ onChangeOffset, scrollOffset, scrollViewRef: scrollView });
    const packedEvents = useMemo(() => {
        const width = dimensionWidth - HOURS_SIDEBAR_WIDTH;
        return populateEvents(events, width, start);
    }, [events, start]);
    useEffect(() => {
        if (scrollToFirst) {
            const firstTop = min(map(packedEvents, 'top')) ?? 0;
            const initPosition = firstTop - calendarHeight.current / (end - start);
            const verifiedInitPosition = initPosition < 0 ? 0 : initPosition;
            if (verifiedInitPosition) {
                setTimeout(() => {
                    scrollView?.current?.scrollTo({
                        y: verifiedInitPosition,
                        animated: true
                    });
                }, 0);
            }
        }
    }, []);
    const _onEventPress = useCallback((eventIndex) => {
        const event = events[eventIndex];
        if (eventTapped) {
            //TODO: remove after deprecation
            eventTapped(event);
        }
        else {
            onEventPress?.(event);
        }
    }, [events, onEventPress, eventTapped]);
    const renderEvents = () => {
        const events = packedEvents.map((event, i) => {
            return (<EventBlock key={i} index={i} event={event} styles={styles.current} format24h={format24h} onPress={_onEventPress} renderEvent={renderEvent}/>);
        });
        return (<View>
        <View style={{ marginLeft: HOURS_SIDEBAR_WIDTH }}>{events}</View>
      </View>);
    };
    return (<ScrollView 
    // @ts-expect-error
    ref={scrollView} contentContainerStyle={[styles.current.contentStyle, { width: dimensionWidth }]} {...scrollEvents}>
      <TimelineHours start={start} end={end} date={date} format24h={format24h} styles={styles.current} onBackgroundLongPress={onBackgroundLongPress} onBackgroundLongPressOut={onBackgroundLongPressOut}/>
      {renderEvents()}
      {showNowIndicator && <NowIndicator styles={styles.current}/>}
    </ScrollView>);
};
export default React.memo(Timeline);
