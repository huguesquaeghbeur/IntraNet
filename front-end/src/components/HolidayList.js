import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getAllHolidays } from '../services/holidayData';

class HolidayList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        getAllHolidays().then(res => {
            this.setState({
                posts: res.data
            })
            console.log(res.data)
        })
    }

    render() {
        const { posts } = this.state
        return (
            <div>
                <div className="flex flex-col justify-around">
                    {posts.map(post =>
                        <div key={post.id} className="border">
                            <div className="flex justify-end">
                                # {post.id}
                            </div>
                            <div>
                                Collaborateur : {post.collaboratorId}
                            </div>
                            <div>
                                Début : {post.startDate}
                            </div>
                            <div>
                                Fin : {post.endDate}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.holiday.holidays)
    return {
        holidays: state.holiday.holidays
    }
}

export default connect(mapStateToProps, null)(HolidayList);