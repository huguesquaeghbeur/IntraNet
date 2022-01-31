import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { getAllHolidays } from '../../services/holidayData';
import HolidayCard from './HolidayCard';

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
            <div className="flex items-center justify-center bg-white">
                <div className="flex flex-col">

                    {/* <!-- Continue With --> */}
                    <div className="flex flex-col">
                        <div className="text-gray-400 font-bold uppercase">
                            Gestion des congés
                        </div>
                        <div className="flex flex-col justify-around">
                            {posts.map(post =>
                                <Link to={`/holiday/${post.id}`} key={post.id}>
                                    <HolidayCard post={post} />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HolidayList;