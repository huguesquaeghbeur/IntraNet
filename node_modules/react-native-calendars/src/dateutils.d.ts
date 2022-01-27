/// <reference types="xdate" />
export declare function sameMonth(a: XDate, b: XDate): boolean;
export declare function sameDate(a: XDate, b: XDate): boolean;
export declare function sameWeek(a: XDate, b: XDate, firstDayOfWeek: number): boolean | undefined;
export declare function isToday(date: XDate): boolean;
export declare function isGTE(a: XDate, b: XDate): boolean;
export declare function isLTE(a: XDate, b: XDate): boolean;
export declare function formatNumbers(date: any): any;
export declare function fromTo(a: XDate, b: XDate): any[];
export declare function month(date: XDate): any[];
export declare function weekDayNames(firstDayOfWeek?: number): any;
export declare function page(date: XDate, firstDayOfWeek?: number, showSixWeeks?: boolean): any[];
export declare function isDateNotInTheRange(minDate: XDate, maxDate: XDate, date: XDate): boolean;
export declare function getWeekDates(date: XDate, firstDay?: number, format?: string): any[] | undefined;
export declare function generateDay(originDate: string, daysOffset?: number): any;
