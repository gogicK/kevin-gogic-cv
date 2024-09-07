import Data from "../../Data";
import ProgressBar from "../ProgressBar";

export default function Competences() {
    const skillsData = [
        { title: "Langages informatique", skills: Data.skills },
        { title: "Frameworks", skills: Data.frameworks },
        { title: "Outils", skills: Data.tools }
    ];

    return (
        <section>
            {
                skillsData.map((skillsData, indexUl) => (
                    <section key={indexUl}>
                        <h2>{skillsData.title}</h2>
                        <ul className="m-3">
                            {
                                skillsData.skills.map((skill, indexLi) => (
                                    <li key={indexLi}>
                                        <h3 className="text-black font-semibold text-base">{skill.name}</h3>
                                        <ProgressBar level={skill.level} />
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                ))
            }
        </section>
    );
}