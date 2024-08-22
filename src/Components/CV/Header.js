export default function Header() {
    return (
        <>
            <div
                className="w-full flex md:flex-row xs:flex-col gap-4 ">
                <div className="flex-none">
                    <img className="rounded-full mx-auto justify-self-start size-44" src="/kevin-gogic.png" alt="Kevin Gogic" />
                </div>
                <div className="w-full flex-1 flex flex-col justify-center gap-4 md:mt-0 sm:mt-8 xs:mt-4">
                    <h1 className="text-3xl font-bold text-slate-900">Bonjour, je suis Kévin Gogic</h1>
                    <p className="text-slate-500">Développeur web passionné, spécialisée dans la création de sites dynamiques et réactifs. Polyvalente en front-end et back-end, je conçois des solutions optimisées et centrées sur l'utilisateur, tout en suivant les dernières tendances du web.</p>
                </div>
            </div>
        </>
    );
}