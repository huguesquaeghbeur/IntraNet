import image404 from '../assets/img/server-flammable.png'

export default function Error() {
    return (
        <main className="  m-5  ">
            
            <h2><b>Erreur 404 : la page n'a pas était trouvé !</b></h2>

            <img src={image404} alt="server_in_flamme" className='' />

        </main>
    )
}