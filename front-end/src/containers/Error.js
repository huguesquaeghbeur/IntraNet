import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Error() {
    return (
        <main className="flex justify-center m-10">
            <div className="text-center align-items text-8xl">
                <FontAwesomeIcon icon={faExclamationCircle} color="red"/>
                <div className="m-5">
                    <h2 className="text-6xl">Erreur 404</h2><br />
                    <p className="text-2xl m-2">Oups ! La page que vous recherchez semble introuvable.</p>
                    <p className="text-2xl m-2">Voici un lien utile à la place :</p>
                    <div className="m-4">
                        <ul>
                            <li><a className="text-4xl text-indigo-700 border-b-4 border-indigo-700 p-2" href="/">Page d'accueil</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}