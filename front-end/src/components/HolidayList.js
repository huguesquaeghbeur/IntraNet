import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
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
                        <div key={post.id} className="border bg-slate-100 hover:bg-slate-200 rounded-md shadow-ambre-100/50 p-2 m-4">
                            <div className="flex justify-between">
                                <div>
                                    {(post.validation === 1) ? (
                                        <div className="bg-orange-100 rounded-md p-1">en attente de validation du CDS</div>
                                    ) : (post.validation === 2) ? (
                                        <div className="bg-orange-300 rounded-md p-1">en attente de validation RH</div>
                                    ) : (post.validation === 3) ? (
                                        <div className="bg-green-300 rounded-md p-1">congés validé</div>
                                    ) : (post.validation === 0) ? (
                                        <div className="bg-red-300 rounded-md p-1">refusé</div>
                                    ) : null}
                                </div>
                                <div className="rounded-full bg-cyan-300 p-1 m-1">
                                    # {post.id}
                                </div>
                            </div>
                            <div className="flex justify-center">
                                Collaborateur : <b>{post.collaboratorId}</b>
                            </div>
                            <div className="flex justify-start">
                            Type : <b>
                                {post.leaveType === 0 ? (
                                    <div>Congé payé</div>
                                ) : (post.leaveType === 1) ? (
                                    <div>Congé maladie</div>
                                ) : (post.leaveType === 2) ? (
                                    <div>Congé parental</div>
                                ) : (post.leaveType === 3) ? (
                                    <div>Congé sans solde</div>
                                ) : null}
                                </b>
                            </div>
                            <div className="flex flex-row justify-around">
                                <div className="p-2">
                                    Début : <b>{post.startDate}</b>
                                </div>
                                <div className="p-2">
                                    Fin : <b>{post.endDate}</b>
                                </div>
                                <div>
                                    Jours cumulés : <b>{post.halfDayBreakCount / 2}</b>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     console.log(state.holiday.holidays)
//     return {
//         holidays: state.holiday.holidays
//     }
// }

// export default connect(mapStateToProps, null)(HolidayList);
export default HolidayList;