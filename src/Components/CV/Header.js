export default function Header() {
    return (
        <section
            className="w-full flex flex-col lg:flex-row gap-4 ">
            <div className="flex-none">
                <img className="rounded-full mx-auto justify-self-start size-44" src={process.env.PUBLIC_URL + '/images/kevin-gogic.png'} alt="Kevin Gogic" />
            </div>
            <div className="w-full flex-1 flex flex-col justify-center gap-4 lg:mt-0 sm:mt-8 xs:mt-4">
                <h1 className="text-center lg:text-left">Kévin Gogic, développeur web full-stack</h1>
                <p className="text-blackLight"><b>Passionné par l'univers du numérique</b>, formé à travers des langages de bas niveau et aujourd'hui <b>spécialisé dans la création de sites.</b><br /> <b>Expérience de 2 ans</b> en développement front-end et back-end. Je suis à la recherche de nouveaux défis.</p>
            </div>
        </section>
    );
}