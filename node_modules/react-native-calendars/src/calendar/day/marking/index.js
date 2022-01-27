import filter from 'lodash/filter';
import React, { Component } from 'react';
import { View } from 'react-native';
import { shouldUpdate, extractComponentProps } from '../../../componentUpdater';
import styleConstructor from './style';
import Dot from '../dot';
export var Markings;
(function (Markings) {
    Markings["DOT"] = "dot";
    Markings["MULTI_DOT"] = "multi-dot";
    Markings["PERIOD"] = "period";
    Markings["MULTI_PERIOD"] = "multi-period";
    Markings["CUSTOM"] = "custom";
})(Markings || (Markings = {}));
export default class Marking extends Component {
    static displayName = 'Marking';
    static markings = Markings;
    style;
    constructor(props) {
        super(props);
        this.style = styleConstructor(props.theme);
    }
    shouldComponentUpdate(nextProps) {
        return shouldUpdate(this.props, nextProps, [
            'type',
            'selected',
            'marked',
            'today',
            'disabled',
            'inactive',
            'disableTouchEvent',
            'activeOpacity',
            'selectedColor',
            'selectedTextColor',
            'dotColor',
            'dots',
            'periods'
        ]);
    }
    getItems(items) {
        const { type } = this.props;
        if (items && Array.isArray(items) && items.length > 0) {
            // Filter out items so that we process only those which have color property
            const validItems = filter(items, function (o) { return o.color; });
            return validItems.map((item, index) => {
                return type === Markings.MULTI_DOT ? this.renderDot(index, item) : this.renderPeriod(index, item);
            });
        }
    }
    renderMarkingByType() {
        const { type, dots, periods } = this.props;
        switch (type) {
            case Markings.MULTI_DOT:
                return this.renderMultiMarkings(this.style.dots, dots);
            case Markings.MULTI_PERIOD:
                return this.renderMultiMarkings(this.style.periods, periods);
            default:
                return this.renderDot();
        }
    }
    renderMultiMarkings(containerStyle, items) {
        return <View style={containerStyle}>{this.getItems(items)}</View>;
    }
    renderPeriod(index, item) {
        const { color, startingDay, endingDay } = item;
        const style = [
            this.style.period,
            {
                backgroundColor: color
            }
        ];
        if (startingDay) {
            style.push(this.style.startingDay);
        }
        if (endingDay) {
            style.push(this.style.endingDay);
        }
        return <View key={index} style={style}/>;
    }
    renderDot(index, item) {
        const { selected, dotColor } = this.props;
        const dotProps = extractComponentProps(Dot, this.props);
        let key = index;
        let color = dotColor;
        if (item) {
            if (item.key) {
                key = item.key;
            }
            color = selected && item.selectedDotColor ? item.selectedDotColor : item.color;
        }
        return <Dot {...dotProps} key={key} color={color}/>;
    }
    render() {
        return this.renderMarkingByType();
    }
}
