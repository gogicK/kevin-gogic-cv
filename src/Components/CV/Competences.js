import Data from "../../Data";
import ProgressBar from "../ProgressBar";

export default function Competences() {
    return (
        <>
            <h2 className="font-bold text-2xl text-indigo-500">Langage informatique</h2>
            <ul className="m-3">
                {
                    Data.skills.map((skill, index) => (
                        <li className="font-bold text-slate-900" key={index}>
                            {skill.name}
                            <ProgressBar level={skill.level} />
                        </li>
                    ))
                }
            </ul>
            <h2 className="font-bold text-2xl text-indigo-500">Frameworks</h2>
            <ul className="m-3">
                {
                    Data.frameworks.map((framework, index) => (
                        <li className="font-bold text-slate-900" key={index}>
                            {framework.name}
                            <ProgressBar level={framework.level} />
                        </li>
                    ))
                }
            </ul>
            <h2 className="font-bold text-2xl text-indigo-500">Outils</h2>
            <ul className="m-3">
                {
                    Data.tools.map((tool, index) => (
                        <li className="font-bold text-slate-900" key={index}>
                            {tool.name}
                            <ProgressBar level={tool.level} />
                        </li>
                    ))
                }
            </ul>
        </>
    );
}