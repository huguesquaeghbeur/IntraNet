import React, { PureComponent } from 'react';
// import InfinGif from "./gif2.gif"
import InfinGif from "./gif420.gif"
import "../baseHeaderFooterEtc/Header.css"
import { Link } from 'react-router-dom';
import { logout, getUser } from '../../redux/actions/userAction'
import { connect } from 'react-redux'
import Management from '../ManagementButton'
import { getRole } from '../../services/userService'

class HeaderBanner extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        if (localStorage.getItem('token') !== null)
            this.setState({
                role: getRole()
            })
    }


    handleLogoutClick() {
        this.props.logout()
        window.location.reload(false);
    }
    render() {
        return (
            <div>
                {/* <div>
                <div className='classTestGif'><iframe src="https://giphy.com/embed/3oFzmdjqH15YebLQ52" width="100%" height="100%" position="absolute" title='testFrame' frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p></p>
                    
                </div> */}

                <nav className='bg-black p-6'>
                    <div className='flex items-center flex-shrink-0 text-white mr-6'>
                        {/* <svg className='fill-current h-8 w-8 mr-2' width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg> */}
                        {/* <img className='gifClass' src={InfinGif} alt="" /> */}
                        {/* <span className='font-semibold text-xl tracking-tight'>IntraNet DevLoopers de la Noche</span> */}
                    </div>

                    {localStorage.getItem('token') !== null ?
                        <div>
                            <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
                                <div className='text-sm lg:flex-grow'>
                                    <Link to="/" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>HOME</Link>
                                    <br />
                                    <br />
                                    <Link to="/departments" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>Departments</Link>
                                    <Link to="/collaborator" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>Collaborators</Link>
                                    <Link to="/bills" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>Bills</Link>
                                    <Link to="/holiday" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>Holidays</Link>
                                </div>
                                <div className='flex flex-col'>
                                    <Link to="/"  >
                                        <button className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
                                            onClick={() => this.handleLogoutClick()}
                                        >
                                            déconnexion
                                        </button>
                                    </Link>
                                    {this.state.role !== "Basic" && this.state.role !== undefined ? <Management currentUser={this.state.role} /> : null}

                                </div>
                            </div>
                        </div>
                        :
                        <div>

                            <Link to="/" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>HOME</Link>
                        </div>

                    }
                </nav>
            </div>
        );
    }
}

const mapsActionToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        getUser: () => dispatch(getUser())
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        isLoading: state.user.isLoading
    }
}

export default connect(mapStateToProps, mapsActionToProps)(HeaderBanner)