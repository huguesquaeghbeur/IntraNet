import PropTypes from 'prop-types';
import XDate from 'xdate';
import React, { Component } from 'react';
import BasicDay, { BasicDayProps } from './basic';
import PeriodDay from './period';
import { MarkingProps } from './marking';
import { DateData } from '../../types';
export interface DayProps extends Omit<BasicDayProps, 'date'> {
    /** The day to render */
    day?: XDate;
    /** Provide custom day rendering component */
    dayComponent?: React.ComponentType<DayProps & {
        date?: DateData;
    }>;
}
export default class Day extends Component<DayProps> {
    static displayName: string;
    static propTypes: {
        /** The day to render */
        day: PropTypes.Requireable<object>;
        /** Provide custom day rendering component */
        dayComponent: PropTypes.Requireable<any>;
        theme: PropTypes.Requireable<object>;
        onLongPress: PropTypes.Requireable<(...args: any[]) => any>;
        onPress: PropTypes.Requireable<(...args: any[]) => any>;
        state: PropTypes.Requireable<string>;
        marking: PropTypes.Requireable<any>;
        markingType: PropTypes.Requireable<import("./marking").Markings>;
        disableAllTouchEventsForDisabledDays: PropTypes.Requireable<boolean>;
        disableAllTouchEventsForInactiveDays: PropTypes.Requireable<boolean>;
    };
    shouldComponentUpdate(nextProps: DayProps): boolean;
    getMarkingLabel(marking: MarkingProps): string;
    getAccessibilityLabel: (this: any, day: any, marking: any, isToday: any) => string;
    getDayComponent(): typeof BasicDay | typeof PeriodDay | React.ComponentType<DayProps & {
        date?: DateData | undefined;
    }>;
    render(): JSX.Element;
}
