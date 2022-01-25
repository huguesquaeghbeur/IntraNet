import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { getAllHolidays } from '../../services/holidayData';
import HolidayCard from './HolidayCard';
import ButtonComponent from '../toolComponents/ButtonComponent';
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

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
                <div>
                    <Link to="/holiday"><ButtonComponent type="button" color="bg-indigo-500" colorText="white" body="Retour" logo={faBackspace} onClickMethod={console.log("back")} /></Link>
                </div>
                <div className="flex items-center justify-center bg-white">
                    <div className="flex flex-col">

                        {/* <!-- Continue With --> */}
                        <div className="flex flex-col">
                            <div className="text-gray-400 font-bold uppercase">
                                Gestion des congés
                            </div>
                            <div className="flex flex-row flex-wrap justify-around">
                                {posts.map(post =>
                                    <Link to={`/holiday/${post.id}`} key={post.id}>
                                        <HolidayCard post={post} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HolidayList;