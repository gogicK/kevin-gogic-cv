import TypeWriterV2 from "../../Hooks/useTypewriterV2.js";

export default function Header() {
    return (
        <section className="snap-start bg-hero min-h-[calc(100vh-76px)] w-full mx-auto xl:px-16 xs:px-8 flex md:flex-row xs:flex-col gap-4 justify-center items-center">
            <div className="w-1/3">
                <img className="border-black border-2 rounded-full md:max-w-[100%] sm:max-w-[70%] xs:max-w-[80%] mx-auto" src={process.env.PUBLIC_URL + '/images/kevin-gogic-pixel.png'} alt="kevin-gogic-profile" />
            </div>
            <div className="w-2/3 flex flex-col justify-center gap-4 md:mt-0 sm:mt-8 xs:mt-4 bg-opacity-75 bg-white border-black border-2 rounded-lg p-4 mr-4">
                <h1>Bonjour, je suis Kévin Gogic,</h1>
                <h2 className="typing text-secondaryDark">Développeur <TypeWriterV2 data={[" web front-end.", " web back-end.", " d'applications mobiles.", " de logiciels."]} /></h2>
                <p><b>Développeur passionné</b>, spécialisé dans la création de sites dynamiques et réactifs. Polyvalent en front-end et back-end, je conçois des solutions optimisées et centrées sur l'utilisateur, tout en suivant les dernières tendances du web.</p>
                <div className="sm:mt-4 xs:mt-2">
                    <button className="btn-primary">Voir mon CV au format A4 classique</button><span className="italic"> ou continuez de scroller !</span>
                </div>
            </div>
        </section>
    );
}