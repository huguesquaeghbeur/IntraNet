import { UpdateSources } from '../commons';
import { CalendarContextProviderProps } from './Provider';
declare class Presenter {
    _isPastDate(date: string): boolean;
    _getIconDown: () => any;
    _getIconUp: () => any;
    getButtonIcon: (date: string, showTodayButton?: boolean) => any;
    setDate: (props: CalendarContextProviderProps, date: string, newDate: string, updateState: (buttonIcon: number) => void, updateSource: UpdateSources) => void;
    setDisabled: (showTodayButton: boolean, newDisabledValue: boolean, oldDisabledValue: boolean, updateState: (disabled: boolean) => void) => void;
    shouldAnimateTodayButton: (props: CalendarContextProviderProps) => boolean | undefined;
    getTodayDate: () => string;
    getPositionAnimation: (date: string, todayBottomMargin?: number) => {
        toValue: number;
        tension: number;
        friction: number;
        useNativeDriver: boolean;
    };
    shouldAnimateOpacity: (props: CalendarContextProviderProps) => number | undefined;
    getOpacityAnimation: ({ disabledOpacity }: CalendarContextProviderProps, disabled: boolean) => {
        toValue: number;
        duration: number;
        useNativeDriver: boolean;
    };
    getTodayFormatted: () => any;
}
export default Presenter;
