// @flow
import XDate from 'xdate';
export const HOUR_BLOCK_HEIGHT = 100;
const EVENT_BLOCK_RIGHT_MARGIN = 10;
function buildEvent(column, left, width, dayStart) {
    const startTime = new XDate(column.start);
    const endTime = column.end ? new XDate(column.end) : new XDate(startTime).addHours(1);
    const dayStartTime = new XDate(startTime).clearTime();
    column.top = (dayStartTime.diffHours(startTime) - dayStart) * HOUR_BLOCK_HEIGHT;
    column.height = startTime.diffHours(endTime) * HOUR_BLOCK_HEIGHT;
    column.width = width;
    column.left = left;
    return column;
}
function collision(a, b) {
    return a.end > b.start && a.start < b.end;
}
function expand(ev, column, columns) {
    let colSpan = 1;
    for (let i = column + 1; i < columns.length; i++) {
        const col = columns[i];
        for (let j = 0; j < col.length; j++) {
            const ev1 = col[j];
            if (collision(ev, ev1)) {
                return colSpan;
            }
        }
        colSpan++;
    }
    return colSpan;
}
function pack(columns, width, calculatedEvents, dayStart) {
    const colLength = columns.length;
    for (let i = 0; i < colLength; i++) {
        const col = columns[i];
        for (let j = 0; j < col.length; j++) {
            const colSpan = expand(col[j], i, columns);
            const L = (i / colLength) * width;
            const W = (width * colSpan) / colLength - EVENT_BLOCK_RIGHT_MARGIN;
            calculatedEvents.push(buildEvent(col[j], L, W, dayStart));
        }
    }
}
function populateEvents(events, screenWidth, dayStart) {
    let lastEnd;
    let columns;
    const calculatedEvents = [];
    events = events
        .map((ev, index) => ({ ...ev, index: index }))
        .sort(function (a, b) {
        if (a.start < b.start)
            return -1;
        if (a.start > b.start)
            return 1;
        if (a.end < b.end)
            return -1;
        if (a.end > b.end)
            return 1;
        return 0;
    });
    columns = [];
    lastEnd = null;
    events.forEach(function (ev) {
        if (lastEnd !== null && ev.start >= lastEnd) {
            pack(columns, screenWidth, calculatedEvents, dayStart);
            columns = [];
            lastEnd = null;
        }
        let placed = false;
        for (let i = 0; i < columns.length; i++) {
            const col = columns[i];
            if (!collision(col[col.length - 1], ev)) {
                col.push(ev);
                placed = true;
                break;
            }
        }
        if (!placed) {
            columns.push([ev]);
        }
        if (lastEnd === null || ev.end > lastEnd) {
            lastEnd = ev.end;
        }
    });
    if (columns.length > 0) {
        pack(columns, screenWidth, calculatedEvents, dayStart);
    }
    return calculatedEvents;
}
export default populateEvents;
