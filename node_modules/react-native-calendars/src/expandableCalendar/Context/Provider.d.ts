import PropTypes from 'prop-types';
import { Component } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import { Theme, DateData } from '../../types';
import Presenter from './Presenter';
import { UpdateSources } from '../commons';
interface Props {
    /** Initial date in 'yyyy-MM-dd' format. Default = now */
    date: string;
    /** Callback for date change event */
    onDateChanged?: (date: string, updateSource: UpdateSources) => void;
    /** Callback for month change event */
    onMonthChange?: (date: DateData, updateSource: UpdateSources) => void;
    /** Whether to show the today button */
    showTodayButton?: boolean;
    /** Today button's top position */
    todayBottomMargin?: number;
    /** Today button's style */
    todayButtonStyle?: ViewStyle;
    /** The opacity for the disabled today button (0-1) */
    disabledOpacity?: number;
    style?: StyleProp<ViewStyle>;
    theme?: Theme;
}
export declare type CalendarContextProviderProps = Props;
/**
 * @description: Calendar context provider component
 * @example: https://github.com/wix/react-native-calendars/blob/master/example/src/screens/expandableCalendar.js
 */
declare class CalendarProvider extends Component<Props> {
    static displayName: string;
    static propTypes: {
        /** Initial date in 'yyyy-MM-dd' format. Default = now */
        date: PropTypes.Validator<any>;
        /** Callback for date change event */
        onDateChanged: PropTypes.Requireable<(...args: any[]) => any>;
        /** Callback for month change event */
        onMonthChange: PropTypes.Requireable<(...args: any[]) => any>;
        /** Whether to show the today button */
        showTodayButton: PropTypes.Requireable<boolean>;
        /** Today button's top position */
        todayBottomMargin: PropTypes.Requireable<number>;
        /** Today button's style */
        todayButtonStyle: PropTypes.Requireable<number | object>;
        /** The opacity for the disabled today button (0-1) */
        disabledOpacity: PropTypes.Requireable<number>;
    };
    style: {
        containerShadow: {
            backgroundColor: string;
        } | {
            shadowColor: string;
            shadowOpacity: number;
            shadowRadius: number;
            shadowOffset: {
                height: number;
                width: number;
            };
            zIndex: number;
            elevation?: undefined;
            backgroundColor: string;
        } | {
            elevation: number;
            shadowColor?: undefined;
            shadowOpacity?: undefined;
            shadowRadius?: undefined;
            shadowOffset?: undefined;
            zIndex?: undefined;
            backgroundColor: string;
        };
        containerWrapper: {
            paddingBottom: number;
        };
        container: {
            backgroundColor: string;
        };
        knobContainer: {
            position: "absolute";
            left: number;
            right: number;
            height: number;
            bottom: number;
            alignItems: "center";
            justifyContent: "center";
            backgroundColor: string;
        };
        knob: {
            width: number;
            height: number;
            borderRadius: number;
            backgroundColor: string;
        };
        sectionText: {
            fontWeight: "bold";
            fontSize: number;
            lineHeight: number;
            color: string;
            paddingTop: number;
            paddingBottom: number;
            paddingLeft: number;
            paddingRight: number;
            backgroundColor: string;
            textAlign: "left";
            textTransform: "uppercase";
        };
        header: {
            position: "absolute";
            left: number;
            right: number;
            backgroundColor: string;
        };
        headerTitle: {
            alignSelf: "center"; /** Whether to show the today button */
            paddingTop: number;
            paddingBottom: number;
            fontSize: number;
            fontFamily: string;
            fontWeight: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
            color: string;
        };
        weekDayNames: {
            flexDirection: "row";
            justifyContent: "space-between";
        };
        weekday: {
            width: number;
            textAlign: "center";
            fontSize: number;
            fontFamily: string;
            fontWeight: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            color: string;
        };
        monthView: {
            backgroundColor: string;
        };
        weekContainer: {
            position: "absolute";
            left: number;
            right: number;
            top: number;
        };
        hidden: {
            opacity: number;
        };
        visible: {
            opacity: number;
        };
        weekCalendar: {
            marginTop: number;
            marginBottom: number;
        };
        week: {
            marginTop: number;
            marginBottom: number;
            paddingRight: number;
            paddingLeft: number;
            flexDirection: "row";
            justifyContent: "space-around";
        };
        dayContainer: {
            flex: number;
            alignItems: "center";
        };
        emptyDayContainer: {
            flex: number;
        };
        dayHeader: {
            width: number;
            textAlign: "center";
            fontSize: number;
            fontFamily: string;
            fontWeight: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            color: string;
        };
        arrowImage: {
            tintColor: string;
            transform: {
                scaleX: number;
            }[] | undefined;
        };
        todayButtonContainer: {
            alignItems: "flex-start" | "flex-end";
            position: "absolute";
            left: number;
            right: number;
            bottom: number;
        };
        todayButton: {
            height: number;
            paddingHorizontal: number;
            borderRadius: number;
            flexDirection: "row" | "row-reverse";
            justifyContent: "center";
            alignItems: "center";
            backgroundColor: string;
        } | {
            shadowColor: string;
            shadowOpacity: number;
            shadowRadius: number;
            shadowOffset: {
                height: number;
                width: number;
            };
            elevation?: undefined;
            height: number;
            paddingHorizontal: number;
            borderRadius: number;
            flexDirection: "row" | "row-reverse";
            justifyContent: "center";
            alignItems: "center";
            backgroundColor: string;
        } | {
            elevation: number;
            shadowColor?: undefined;
            shadowOpacity?: undefined;
            shadowRadius?: undefined;
            shadowOffset?: undefined;
            height: number;
            paddingHorizontal: number;
            borderRadius: number;
            flexDirection: "row" | "row-reverse";
            justifyContent: "center";
            alignItems: "center";
            backgroundColor: string;
        };
        todayButtonText: {
            color: string;
            fontSize: number;
            fontWeight: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
            fontFamily: string;
        };
        todayButtonImage: {
            tintColor: string;
            marginLeft: number | undefined;
            marginRight: number | undefined;
        };
    };
    presenter: Presenter;
    state: {
        prevDate: string;
        date: string;
        updateSource: UpdateSources;
        buttonY: Animated.Value;
        buttonIcon: any;
        disabled: boolean;
        opacity: Animated.Value;
    };
    componentDidUpdate(prevProps: Props): void;
    getDate(date: string): string;
    getProviderContextValue: () => {
        setDate: (date: string, updateSource: UpdateSources) => void;
        date: string;
        prevDate: string;
        updateSource: UpdateSources;
        setDisabled: (disabled: boolean) => void;
    };
    setDate: (date: string, updateSource: UpdateSources) => void;
    setDisabled: (disabled: boolean) => void;
    animateTodayButton(date: string): void;
    animateOpacity(disabled: boolean): void;
    onTodayPress: () => void;
    renderTodayButton(): JSX.Element;
    render(): JSX.Element;
}
export default CalendarProvider;
