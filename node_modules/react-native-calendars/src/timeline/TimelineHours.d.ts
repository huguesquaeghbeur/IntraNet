import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
interface NewEventTime {
    hour: number;
    minutes: number;
    date?: string;
}
export interface TimelineHoursProps {
    start?: number;
    end?: number;
    date?: string;
    format24h?: boolean;
    onBackgroundLongPress?: (timeString: string, time: NewEventTime) => void;
    onBackgroundLongPressOut?: (timeString: string, time: NewEventTime) => void;
    styles: {
        [key: string]: ViewStyle | TextStyle;
    };
}
declare const _default: React.MemoExoticComponent<(props: TimelineHoursProps) => JSX.Element>;
export default _default;
