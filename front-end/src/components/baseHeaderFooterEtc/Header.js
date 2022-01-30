import React, { PureComponent } from 'react';
// import InfinGif from "./gif2.gif"
import InfinGif from "./gif420.gif"
import "../baseHeaderFooterEtc/Header.css"
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/userAction'
import { connect } from 'react-redux'

class HeaderBanner extends PureComponent {
    constructor(props) {
        super(props);
    }
    handleLogoutClick() {
        console.log("handle click")
        this.props.logout()
        window.location.reload(false);
    }
    render() {
        return (
            <div>
                {/* <div>
                <div className='classTestGif'><iframe src="https://giphy.com/embed/3oFzmdjqH15YebLQ52" width="100%" height="100%" position="absolute" title='testFrame' frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p></p>
                    
                </div> */}

                <nav className='flex items-center justify-between flex-wrap bg-black p-6'>
                    <div className='flex items-center flex-shrink-0 text-white mr-6'>
                        {/* <svg className='fill-current h-8 w-8 mr-2' width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg> */}
                        {/* <img className='gifClass' src={InfinGif} alt="" /> */}
                        {/* <span className='font-semibold text-xl tracking-tight'>IntraNet DevLoopers de la Noche</span> */}
                    </div>

                    {this.props.user !== undefined ?
                        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
                            <div className='text-sm lg:flex-grow'>
                                <Link to="/" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>HOME</Link>
                                {/* <a href="/" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>
                                HOME
                            </a> */}
                                <br />
                                <br />
                                <Link to="/departments" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>Departments</Link>
                                {/* <a href="/departments" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>
                                Departments
                            </a> */}
                                <Link to="/collaborator" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>Collaborators</Link>
                                {/* <a href="/collaborator" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>
                                Collaborators
                            </a> */}
                                <Link to="/bills" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>Bills</Link>
                                {/* <a href="/bills" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200'>
                                Bills
                            </a> */}
                            </div>
                            <div>
                                {/* <Link to="/" className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'>Connexion</Link> */}
                                {/* <a href="/" className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'>Connexion</a> */}
                                <Link to="/"  >
                                    <button className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
                                        onClick={() => this.handleLogoutClick()}
                                    >
                                        déconnexion
                                    </button>
                                </Link>
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
        logout: () => dispatch(logout())
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        isLoading: state.user.isLoading
    }
}

export default connect(mapStateToProps, mapsActionToProps)(HeaderBanner)