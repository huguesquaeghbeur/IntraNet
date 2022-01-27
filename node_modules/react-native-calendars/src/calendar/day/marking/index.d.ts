import { Component } from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';
import { Theme, MarkingTypes } from '../../../types';
import { DotProps } from '../dot';
export declare enum Markings {
    DOT = "dot",
    MULTI_DOT = "multi-dot",
    PERIOD = "period",
    MULTI_PERIOD = "multi-period",
    CUSTOM = "custom"
}
declare type CustomStyle = {
    container?: ViewStyle;
    text?: TextStyle;
};
declare type DOT = {
    key?: string;
    color: string;
    selectedDotColor?: string;
};
declare type PERIOD = {
    color: string;
    startingDay?: boolean;
    endingDay?: boolean;
};
export interface MarkingProps extends DotProps {
    type?: MarkingTypes;
    theme?: Theme;
    selected?: boolean;
    marked?: boolean;
    today?: boolean;
    disabled?: boolean;
    inactive?: boolean;
    disableTouchEvent?: boolean;
    activeOpacity?: number;
    textColor?: string;
    selectedColor?: string;
    selectedTextColor?: string;
    customTextStyle?: StyleProp<TextStyle>;
    customContainerStyle?: StyleProp<ViewStyle>;
    dotColor?: string;
    dots?: DOT[];
    periods?: PERIOD[];
    startingDay?: boolean;
    endingDay?: boolean;
    accessibilityLabel?: string;
    customStyles?: CustomStyle;
}
export default class Marking extends Component<MarkingProps> {
    static displayName: string;
    static markings: typeof Markings;
    style: any;
    constructor(props: MarkingProps);
    shouldComponentUpdate(nextProps: MarkingProps): boolean;
    getItems(items?: DOT[] | PERIOD[]): JSX.Element[] | undefined;
    renderMarkingByType(): JSX.Element;
    renderMultiMarkings(containerStyle: object, items?: DOT[] | PERIOD[]): JSX.Element;
    renderPeriod(index: number, item: any): JSX.Element;
    renderDot(index?: number, item?: any): JSX.Element;
    render(): JSX.Element;
}
export {};
