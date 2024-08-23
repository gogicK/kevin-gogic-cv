export default function Header() {
    return (
        <>
            <div
                className="w-full flex flex-col md:flex-row gap-4 ">
                <div className="flex-none">
                    <img className="rounded-full mx-auto justify-self-start size-44" src={process.env.PUBLIC_URL + '/kevin-gogic.png'} alt="Kevin Gogic" />
                </div>
                <div className="w-full flex-1 flex flex-col justify-center gap-4 md:mt-0 sm:mt-8 xs:mt-4">
                    <h1 className="text-3xl text-center md:text-left font-bold text-slate-900">Bonjour, je suis Kévin Gogic</h1>
                    <p className="text-slate-500"><b>Développeur web passionné</b>, spécialisée dans la création de sites dynamiques et réactifs. Polyvalente en front-end et back-end, je conçois des solutions optimisées et centrées sur l'utilisateur, tout en suivant les dernières tendances du web.</p>
                </div>
            </div>
        </>
    );
}