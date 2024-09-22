import Navbar from '../Components/Navbar';

export default function About() {
    return (
        <>
            <Navbar />
            <div className="bg-pattern">
                <section className='font-poppins flex flex-col justify-center items-center px-10 lg:px-40 min-h-[calc(100vh-76px)] space-y-4 leading-relaxed'>
                    <div className="bg-white p-8 shadow-xl rounded-xl my-4">
                        <div>
                            <h1 className="p-4 text-2xl lg:text-4xl">A propos de ce site</h1>
                            <p className="indent-8 text-justify">Bienvenue sur mon site, une vitrine moderne et performante conçue pour offrir une expérience utilisateur fluide et rapide. Ce site est construit avec React, un framework JavaScript puissant qui permet de créer des interfaces dynamiques et réactives. Pour le style, j'ai opté pour Tailwind CSS, un framework qui me permet de personnaliser chaque élément avec précision tout en maintenant un code propre et maintenable. Hébergé sur une infrastructure serverless, le site est entièrement statique, garantissant une rapidité de chargement optimale et une grande fiabilité. Explorez-le pour découvrir une technologie de pointe alliée à un design élégant.</p>
                        </div>
                        <div>
                            <h1 className="p-4 text-2xl lg:text-4xl">A propos de moi</h1>
                            <p className="indent-8 text-justify">Kévin Gogic, développeur web avec une passion pour la création de solutions numériques innovantes et efficaces. Avec plusieurs années d'expérience dans le développement de sites web et d'applications, je maîtrise un large éventail de technologies et de langages, ce qui me permet de m'adapter à divers projets et défis. Mon approche du développement est centrée sur l'utilisateur, alliant performance, esthétique et facilité d'utilisation. Je suis toujours à la recherche de nouvelles opportunités pour apprendre, grandir et appliquer mes compétences à des projets qui font la différence. Si vous recherchez un développeur capable de transformer vos idées en réalité, je suis à votre disposition.</p>
                        </div>
                    </div>
                </section >
            </div>
        </>
    );
}