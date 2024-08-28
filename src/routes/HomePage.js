import TypeWriterV2 from "../Hooks/useTypewriterV2.js";
import Contact from "../routes/Contact.js";


export default function HomePage() {

    return (
        <>
            <main className="font-poppins w-full overflow-y-scroll h-[calc(100vh-76px)] relative snap-y snap-mandatory">
                <section className="snap-start bg-hero h-[calc(100vh-76px)] w-full mx-auto xl:px-16 xs:px-8 flex md:flex-row xs:flex-col gap-4 justify-center items-center">
                    <div className="w-1/3">
                        <img className="border-black border-2 rounded-full md:max-w-[100%] sm:max-w-[70%] xs:max-w-[80%] mx-auto" src={process.env.PUBLIC_URL + '/kevin-gogic-pixel.png'} alt="kevin-gogic-profile" />
                    </div>
                    <div className="w-2/3 flex flex-col justify-center gap-4 text-gray-800 md:mt-0 sm:mt-8 xs:mt-4 bg-opacity-75 bg-white border-black border-2 rounded-lg p-4 mr-4">
                        <h1 className="text-4xl font-bold font-serif">Bonjour, je suis Kévin Gogic,</h1>
                        <h2 className="text-xl font-semibold text-justify typing text-rose-500">Développeur <TypeWriterV2 data={[" web front-end.", " web back-end.", " d'applications mobiles.", " de logiciels."]} /></h2>
                        <p className="font-medium"><b>Développeur passionné</b>, spécialisé dans la création de sites dynamiques et réactifs. Polyvalent en front-end et back-end, je conçois des solutions optimisées et centrées sur l'utilisateur, tout en suivant les dernières tendances du web.</p>
                        <div className="sm:mt-4 xs:mt-2">
                            <p><button className="px-6 py-1 bg-indigo-500 text-white rounded-sm">Voir mon CV au format A4 classique</button><span className="italic"> ou continuez de scroller !</span></p>
                        </div>
                    </div>
                </section>
                <section className="snap-start h-[calc(100vh-76px)] w-full grid grid-cols-3 bg-gray-100">
                    <div className="col-span-2 p-20 flex flex-col justify-center gap-4">
                        <h2 className="text-4xl text-indigo-500">Développeur</h2>
                        <p className="italic indent-12 text-justify">
                            Mon parcours m'a permis de <b>maîtriser</b> un large éventail <span className="text-rose-500">de technologies et de langages de programmation.</span><br />
                            Au fil des années, j'ai eu l'opportunité de travailler sur des <b>projets variés</b>, allant du <span className="text-rose-500">développement de programmes</span> à travers des machines linux & windows, <span className="text-rose-500">à la création de site web.</span><br />
                            Chaques projets m'a permis de <b>renforcer</b> mes compétences <span className="text-rose-500">en architecture logicielle, en résolution de problèmes, et en optimisation de code.</span><br />
                            Je suis particulièrement <b>attentif</b> <span className="text-rose-500">à la qualité du code, à la maintenabilité des solutions</span> que je propose, et à la <span className="text-rose-500">satisfaction des utilisateurs</span> finaux.
                        </p>
                    </div>
                    <div className="col-span-1 flex justify-center items-center"><img className="max-w-96 max-h-96 border-black border-2 rounded-full md:max-w-[70%] sm:max-w-[50%]" alt="capybara developpeur" src={process.env.PUBLIC_URL + '/capybara-developpeur.png'} /></div>
                    <hr className="col-span-3 border-pink-500 border-2 mx-20" />
                    <div className="col-span-1 flex justify-center items-center"><img className="max-w-96 max-h-96 border-black border-2 rounded-full md:max-w-[70%] sm:max-w-[50%]" alt="capybara peintre" src={process.env.PUBLIC_URL + '/capybara-peintre.png'} /></div>
                    <div className="col-span-2 p-20 flex flex-col justify-center gap-4">
                        <h2 className="text-4xl text-indigo-500">Designer</h2>
                        <p className="italic indent-12 text-justify">
                            Je suis un <span className="text-rose-500">designer en herbe</span>, passionné par la <b>création</b> et animé par une <span className="text-rose-500">forte volonté d'apprendre.</span><br />
                            Chaque projet est pour moi l'occasion d'<b>explorer</b> <span className="text-red-500">de nouvelles idées, d'acquérir de nouvelles compétences et de donner vie à des concepts uniques.</span>
                        </p>
                    </div>
                </section>
                <section className="snap-start h-[calc(100vh-76px)] w-full bg-gradient-to-r from-indigo-500 to-rose-500 p-10">
                    <h2 className="text-4xl text-white text-center underline">Compétences</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <section className="col-span-2">
                            <h3 className="text-3xl text-white">Développeur</h3>
                            <section className="grid grid-cols-3 gap-4 border-2 border-black h-">
                                <div className="col-span-1">
                                    <h4 className="text-2xl text-white">Front-end</h4>
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>Vue</li>
                                    </ul>
                                </div>
                                <div className="col-span-1">
                                    <h4 className="text-2xl text-white">Back-end</h4>
                                    <ul>
                                        <li>Node.js</li>
                                        <li>Express</li>
                                        <li>Python</li>
                                        <li>Flask</li>
                                        <li>PHP</li>
                                    </ul>
                                </div>
                                <div className="col-span-1">
                                    <h4 className="text-2xl text-white">Base de données</h4>
                                    <ul>
                                        <li>MySQL</li>
                                        <li>MongoDB</li>
                                        <li>SQLite</li>
                                        <li>PostgreSQL</li>
                                        <li>Oracle</li>
                                    </ul>
                                </div>
                            </section>
                        </section>
                        <section className="col-span-1">
                            <h3 className="text-3xl text-white">Désigner</h3>
                        </section>
                    </div>
                </section>
                <Contact />
            </main >
        </>
    );
}