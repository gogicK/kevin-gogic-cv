
export default function Description() {
    return (
        <section className="snap-start min-h-[calc(100vh-76px)] w-full grid grid-cols-3 bg-white">
            <div className="col-span-3 lg:col-span-2 p-4 mt-4 lg:mt-0 lg:p-20 flex flex-col justify-center gap-4">
                <h2>Développeur</h2>
                <p className="italic indent-12 text-justify text-base lg:text-lg">
                    Mon parcours m'a permis de <b>maîtriser</b> un large éventail <span className="text-secondaryDark">de technologies et de langages de programmation.</span><br />
                    Au fil des années, j'ai eu l'opportunité de travailler sur des <b>projets variés</b>, allant du <span className="text-secondaryDark">développement de programmes</span> à travers des machines linux & windows, <span className="text-secondaryDark">à la création de site web.</span><br />
                    Chaques projets m'a permis de <b>renforcer</b> mes compétences <span className="text-secondaryDark">en architecture logicielle, en résolution de problèmes, et en optimisation de code.</span><br />
                    Je suis particulièrement <b>attentif</b> <span className="text-secondaryDark">à la qualité du code, à la maintenabilité des solutions</span> que je propose, et à la <span className="text-secondaryDark">satisfaction des utilisateurs</span> finaux.
                </p>
            </div>
            <div className="col-span-3 lg:col-span-1 flex justify-center items-center mb-4 lg:mb-0"><img className="max-w-96 max-h-96 border-black border-2 rounded-full m-4" alt="capybara developpeur" src={process.env.PUBLIC_URL + '/images/capybara-developpeur.png'} /></div>
            <hr className="col-span-3 border-secondaryDark border-2 mx-20" />
            <div className="order-5 lg:order-4 col-span-3 lg:col-span-1 flex justify-center items-center"><img className="max-w-96 max-h-96 border-black border-2 rounded-full m-4" alt="capybara peintre" src={process.env.PUBLIC_URL + '/images/capybara-peintre.png'} /></div>
            <div className="order:4 lg:order-5 col-span-3 lg:col-span-2 p-4 lg:p-20 flex flex-col justify-center gap-4">
                <h2>Designer</h2>
                <p className="italic indent-12 text-justify text-base lg:text-lg">
                    Je suis un <span className="text-secondaryDark">designer en herbe</span>, passionné par la <b>création</b> et animé par une <span className="text-secondaryDark">forte volonté d'apprendre.</span><br />
                    Chaque projet est pour moi l'occasion d'<b>explorer</b> <span className="text-secondaryDark">de nouvelles idées, d'acquérir de nouvelles compétences et de donner vie à des concepts uniques.</span>
                </p>
            </div>
        </section>
    );
}