import React from 'react';

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "75b8bbf1-eec3-40e9-85fa-3fc8b53aead9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Votre message a était envoyé avec succès");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section className="snap-start h-[calc(100vh-76px)] w-full bg-blue-50 dark:bg-slate-800" id="contact">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mb-4">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <h2
                            className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                            Restons en Contact
                        </h2>
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2">
                        <div className="h-full pr-6">
                            <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400 indent-8 text-justify">
                                Vous avez un projet en tête ou des questions sur mes services ? Je suis ici pour vous aider à transformer vos idées en réalité. Que vous souhaitiez discuter d'un futur projet, obtenir des informations supplémentaires ou simplement dire bonjour, n'hésitez pas à me contacter !
                                Remplissez le formulaire ci-dessous, et je vous répondrai dans les plus brefs délais. Vous pouvez également me joindre directement par mail/téléphone. Je suis impatient de collaborer avec vous et d'apporter mon expertise à votre prochain projet.<br />
                                Merci pour votre visite, et à bientôt !
                            </p>
                            <ul className="mb-6 md:mb-0">
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-indigo-500 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" className="h-6 w-6">
                                            <path
                                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                            </path>
                                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400"><b>Téléphone :</b> 06.48.06.06.54</p>
                                        <p className="text-gray-600 dark:text-slate-400"><b>Mail :</b> kevin.gogic@gmail.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                            <h2 className="mb-4 text-2xl font-bold text-white">Prêt à commencer ?</h2>
                            <form id="contactForm" onSubmit={onSubmit}>
                                <div className="mb-6">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label for="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Votre nom" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-600 sm:mb-0" name="name" />
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label for="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Votre adresse mail" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-600 sm:mb-0" name="email" />
                                        </div>
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label for="message" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="message" name="message" cols="30" rows="5" placeholder="Écrivez-moi un message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-600 sm:mb-0"></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="w-full bg-indigo-500 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Envoyer message</button>
                                </div>
                            </form>
                            <span className="text-white">{result}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}