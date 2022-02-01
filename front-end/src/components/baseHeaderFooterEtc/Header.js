import React, { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
// import InfinGif from "./gif2.gif"
//import InfinGif from "./gif420.gif"
import "../baseHeaderFooterEtc/Header.css"
import { Link } from 'react-router-dom';
import { getUser, deconnect } from "../../services/collaboratorData";
import Management from "../ManagementButton";

const HeaderBanner = () => {
    const [currentUser, setCurrentUser] = useState("");

    useEffect(() => {
        const user = getUser()
        if (user) {
            const decoded = jwt_decode(user)
            //setCurrentUser(user)
            const baseUrl="http://schemas.microsoft.com/ws/2008/06/identity/claims/"
            setCurrentUser(decoded[baseUrl+"role"])   
            console.log(currentUser)
        }
    }, [currentUser])
    
    const closeApp = () => {
        deconnect()
        //jwtr.destroy(token);
        refreshPage()
    }

    const refreshPage = () =>{
        window.location.reload();
     }

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

                <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
                    <div className='text-sm lg:flex-grow flex flex-between'>
                       
                        {currentUser === "CEO" ? (
                            <div>
                                <Link to="/departments" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>Services</Link>

                                <Link to="/collaborator" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>Collaborateurs</Link>

                                <Link to="/bills" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>Note de frais</Link>

                                <Link to="/" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4' onClick={closeApp}>Déconnexion</Link>
                            </div>
                        ) : (
                            <Link to="/" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>Acceuil</Link>
                        )}
                        <Management currentUser={currentUser} />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default HeaderBanner;