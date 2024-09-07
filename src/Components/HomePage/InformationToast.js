export default function InformationToast() {
    return (
        <section className="absolute min-w-full h-auto bg-secondary bg-opacity-75 font-poppins text-gray-700 flex justify-center gap-16">
            <div className="col-span-1 flex items-center justify-center">
                <img className="w-20 h-20 fill-gray-700" alt="" src={process.env.PUBLIC_URL + '/images/icon-ouvrier.png'} />
            </div>
            <ul className="col-span-3 flex flex-col items-center justify-center p-4">
                <b>Ce site est en cours de construction, voici les prochaines mise à jour :</b>
                <li>
                    Section compétences sur la page d'accueil
                </li>
                <li>
                    Ajout d'un thème sombre, animations et multilangage
                </li>
            </ul>
        </section>
    );
}