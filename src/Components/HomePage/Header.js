import TypeWriterV2 from "../../Hooks/useTypewriterV2.js";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <section className="snap-start bg-hero min-h-[calc(100vh-76px)] w-full mx-auto flex lg:flex-row flex-col gap-4 lg:justify-center items-center">
            <div>
                <img className="border-black border-2 rounded-full max-w-[75%] lg:max-w-[100%] mx-auto" src={process.env.PUBLIC_URL + '/images/kevin-gogic-pixel.png'} alt="kevin-gogic-profile" />
            </div>
            <div className="w-full lg:w-2/3 flex flex-col justify-center gap-4 md:mt-0 sm:mt-8 xs:mt-4 bg-opacity-75 bg-white border-black border-2 rounded-lg p-4 mx-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl">Bonjour, je suis Kévin Gogic,</h1>
                <h2 className="typing text-secondaryDark text-xl lg:text-2xl">Développeur <TypeWriterV2 data={[" web front-end.", " web back-end.", " d'applications mobiles.", " de logiciels."]} /></h2>
                <p className="text-base md:text-lg"><b>Développeur passionné</b>, spécialisé dans la création de sites dynamiques et réactifs. Polyvalent en front-end et back-end, je conçois des solutions optimisées et centrées sur l'utilisateur, tout en suivant les dernières tendances du web.</p>
                <div className="flex flex-col justify-center items-center text-center">
                    <Link to={'/kevin-webdev/cvA4'} className="btn-primary text-lg w-96">
                        Voir mon CV au format A4 classique
                    </Link><span className="italic text-lg"> ou continuez de scroller !</span>
                </div>
            </div>
        </section>
    );
}