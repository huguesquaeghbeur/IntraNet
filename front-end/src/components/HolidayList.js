import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class HolidayList extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
               <div className="flex flex-row justify-around">
                    { this.props.holidays != undefined ? (
                        <div>
                            {[this.props.holidays].map(h => {
                                <div>
                                    <div>{h.id}</div>
                                    <div>{h.startDate}</div>
                                    <div>{h.endDate}</div>
                                </div>
                            })}
                        </div>
                    ) : null }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        holidays: state.holiday.holidays
    }
}

export default connect(mapStateToProps, null)(HolidayList);