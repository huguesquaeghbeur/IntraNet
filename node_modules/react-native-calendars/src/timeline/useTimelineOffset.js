import { useCallback, useEffect, useRef } from 'react';
export default (props) => {
    const { onChangeOffset, scrollOffset, scrollViewRef } = props;
    const inMomentum = useRef(false);
    useEffect(() => {
        // NOTE: The main reason for this feature is to sync the offset
        // between all of the timelines in the TimelineList component
        if (scrollOffset !== undefined) {
            scrollViewRef?.current?.scrollTo({
                y: scrollOffset,
                animated: false
            });
        }
    }, [scrollOffset]);
    const onScrollEndDrag = useCallback((event) => {
        const offset = event.nativeEvent.contentOffset.y;
        setTimeout(() => {
            if (!inMomentum.current) {
                onChangeOffset?.(offset);
            }
        }, 0);
    }, []);
    const onMomentumScrollBegin = useCallback(() => {
        inMomentum.current = true;
    }, []);
    const onMomentumScrollEnd = useCallback((event) => {
        inMomentum.current = false;
        onChangeOffset?.(event.nativeEvent.contentOffset.y);
    }, [onChangeOffset]);
    return {
        scrollEvents: {
            onScrollEndDrag,
            onMomentumScrollBegin,
            onMomentumScrollEnd
        }
    };
};
