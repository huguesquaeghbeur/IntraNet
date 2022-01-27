import XDate from 'xdate';
import { PureComponent } from 'react';
import { CalendarProps } from '../calendar';
export declare type WeekProps = CalendarProps;
declare class Week extends PureComponent<WeekProps> {
    static displayName: string;
    static propTypes: {
        theme: import("prop-types").Requireable<object>;
        style: import("prop-types").Requireable<number | object>;
        current: import("prop-types").Requireable<string>;
        initialDate: import("prop-types").Requireable<string>;
        minDate: import("prop-types").Requireable<string>;
        maxDate: import("prop-types").Requireable<string>;
        firstDay: import("prop-types").Requireable<number>;
        markedDates: import("prop-types").Requireable<object>;
        displayLoadingIndicator: import("prop-types").Requireable<boolean>;
        showWeekNumbers: import("prop-types").Requireable<boolean>;
        hideExtraDays: import("prop-types").Requireable<boolean>;
        showSixWeeks: import("prop-types").Requireable<boolean>;
        onDayPress: import("prop-types").Requireable<(...args: any[]) => any>;
        onDayLongPress: import("prop-types").Requireable<(...args: any[]) => any>;
        onMonthChange: import("prop-types").Requireable<(...args: any[]) => any>;
        onVisibleMonthsChange: import("prop-types").Requireable<(...args: any[]) => any>;
        disableMonthChange: import("prop-types").Requireable<boolean>;
        enableSwipeMonths: import("prop-types").Requireable<boolean>;
        disabledByDefault: import("prop-types").Requireable<boolean>;
        headerStyle: import("prop-types").Requireable<number | object>;
        customHeader: import("prop-types").Requireable<any>;
        allowSelectionOutOfRange: import("prop-types").Requireable<boolean>;
        day: import("prop-types").Requireable<object>;
        dayComponent: import("prop-types").Requireable<any>;
        onLongPress: import("prop-types").Requireable<(...args: any[]) => any>;
        onPress: import("prop-types").Requireable<(...args: any[]) => any>;
        state: import("prop-types").Requireable<string>;
        marking: import("prop-types").Requireable<any>;
        markingType: import("prop-types").Requireable<import("../calendar/day/marking").Markings>;
        disableAllTouchEventsForDisabledDays: import("prop-types").Requireable<boolean>;
        disableAllTouchEventsForInactiveDays: import("prop-types").Requireable<boolean>;
        month: import("prop-types").Requireable<XDate>;
        addMonth: import("prop-types").Requireable<(...args: any[]) => any>;
        monthFormat: import("prop-types").Requireable<string>;
        hideDayNames: import("prop-types").Requireable<boolean>;
        hideArrows: import("prop-types").Requireable<boolean>;
        renderArrow: import("prop-types").Requireable<(...args: any[]) => any>;
        onPressArrowLeft: import("prop-types").Requireable<(...args: any[]) => any>;
        onPressArrowRight: import("prop-types").Requireable<(...args: any[]) => any>;
        disableArrowLeft: import("prop-types").Requireable<boolean>;
        disableArrowRight: import("prop-types").Requireable<boolean>;
        disabledDaysIndexes: import("prop-types").Requireable<(number | null | undefined)[]>;
        renderHeader: import("prop-types").Requireable<any>;
        customHeaderTitle: import("prop-types").Requireable<any>;
        webAriaLevel: import("prop-types").Requireable<number>;
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
            alignSelf: "center";
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
    getWeek(date?: string): any[] | undefined;
    renderDay(day: XDate, id: number): JSX.Element;
    render(): JSX.Element;
}
export default Week;
