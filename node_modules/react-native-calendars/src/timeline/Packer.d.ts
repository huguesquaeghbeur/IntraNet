import { Event, PackedEvent } from './EventBlock';
export declare const HOUR_BLOCK_HEIGHT = 100;
declare function populateEvents(events: Event[], screenWidth: number, dayStart: number): PackedEvent[];
export default populateEvents;
