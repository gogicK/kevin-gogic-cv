import Icon from "../../Icon.js";

export default function Skills() {
    return (
        <section className="snap-start min-h-[calc(100vh-76px)] w-full bg-gradient-to-r from-primary to-secondaryDark flex flex-col p-8">
            <h2 className="text-4xl text-white text-center mb-4">Compétences</h2>
            <div className="flex-1">
                <section className="bg-white bg-opacity-75 shadow-2xl rounded-xl flex-1 p-4">
                    <h3 className="text-3xl text-primary text-center  mb-2">Langages de programmation</h3>
                    <ul className="flex items-center justify-around mb-4">
                        <li className="flex flex-col justify-center items-center">
                            <div className="btn-secondaryDark-reverse">{Icon.webFundamental}</div>
                            <h5 className="text-center text-secondaryDark font-bold w-20">Fondamental Web</h5>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="bg-white border-2 border-secondaryDark hover:bg-secondaryDark rounded-xl shadow-xl duration-500">{Icon.phpLogo}</div>
                            <h5 className="text-center">PHP</h5>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="bg-white border-2 border-secondaryDark hover:bg-secondaryDark rounded-xl shadow-xl duration-500">{Icon.devLangage}</div>
                            <h5 className="text-center text-primary font-bold">Pour Windows & Linux</h5>
                        </li>
                    </ul>
                    <hr />
                    <h3 className="text-3xl text-primary text-center ">Front-end</h3>
                    <ul className="flex items-center justify-around">
                        <li className="flex flex-col justify-center items-center">
                            <h5 className="text-center text-primary font-bold">Tailwind / Bootstrap / MaterialUI</h5>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <h5 className="text-center text-primary font-bold">Sass</h5>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <h5 className="text-center text-primary font-bold">React</h5>
                        </li>
                    </ul>
                    <hr />
                    <h3 className="text-3xl text-primary text-center ">Back-end & Bases de données</h3>
                    <ul className="flex items-center justify-around">
                        <li className="flex flex-col justify-center items-center">
                            <h5 className="text-center text-primary font-bold">MongoDB/SQLite/PostGresql</h5>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <h5 className="text-center text-primary font-bold">Next.js</h5>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <h5 className="text-center text-primary font-bold">Laravel</h5>
                        </li>
                    </ul>
                    <hr />
                    <h3 className="text-3xl text-primary text-center ">Divers outils</h3>
                    <ul className="flex items-center justify-around">
                        <li className="flex flex-col justify-center items-center">
                            <h5 className="text-center text-primary font-bold">Github / Gitlab / SVN</h5>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <h5 className="text-center text-primary font-bold">Docker</h5>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <h5 className="text-center text-primary font-bold">PostMan / Figma</h5>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <h5 className="text-center text-primary font-bold">Outils d'images</h5>
                        </li>

                    </ul>
                </section>
            </div>
        </section>
    );
}