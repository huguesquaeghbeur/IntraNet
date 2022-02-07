import image404 from '../assets/img/server-flammable.png'
import { Link } from 'react-router-dom'

export default function Error() {
    return (

        <main className="flex justify-center items-center flex-wrap  inset-x-1/3 p-5">
            <aside className='text-home little-card m-5'>

                <Link to="/">
                   <p className='text-lg mb-5'>Retour à l'accueil</p> 
                </Link>

                <h1 className='text-2xl' >Erreur 404 </h1> <p className='text-md' >La page que vous cherchez n'a pas été trouvé.</p>
            </aside>
            <img src={image404} alt="server_in_flamme" className='m-5 w-96' />
        </main>
    )
}