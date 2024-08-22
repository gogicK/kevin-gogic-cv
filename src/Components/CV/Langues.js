import Data from "../../Data";
import ProgressBar from "../ProgressBar";

export default function Langues() {
    return (
        <>
            <h2 className="font-caveat font-bold text-2xl text-indigo-500">Langues</h2>
            <ul className="m-3">
                {
                    Data.languages.map((language, index) => (
                        <li className="text-lg font-bold text-slate-900" key={index}>
                            {language.name}
                            <ProgressBar level={language.level} />
                        </li>
                    ))
                }
            </ul>
        </>
    );
}