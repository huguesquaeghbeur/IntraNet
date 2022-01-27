/// <reference types="react" />
import { TextStyle, ViewStyle } from 'react-native';
export { HOUR_BLOCK_HEIGHT } from './Packer';
export interface NowIndicatorProps {
    styles: {
        [key: string]: ViewStyle | TextStyle;
    };
}
declare const NowIndicator: (props: NowIndicatorProps) => JSX.Element;
export default NowIndicator;
