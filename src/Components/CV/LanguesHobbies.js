import Data from "../../Data";

export default function LanguesHobbies() {
    return (
        <section className="font-bold text-slate-900">
            <h2>Langues</h2>
            <ul className="flex flex-col gap-2 indent-8 m-2">
                {
                    Data.languages.map((language, index) => (
                        <li key={index}>
                            <span>{language.name}</span> : <span>{language.level}</span>
                        </li>
                    ))
                }
            </ul>
            <h2 className="mt-8">Hobbies</h2>
            <ul className="flex justify-around m-2">
                {
                    Data.interets.map((interet, index) => (
                        <li key={index}>
                            {interet}
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}