import Data from "../../Data";
import Timeline from "../Timeline";

export default function Experiences() {
    return (
        <section>
            <h2>Expériences</h2>
            <ul className="-my-6">
                {Data.experiences.map((experience, index) => (
                    <Timeline key={index} title={experience.title} subTitle={experience.company} date={experience.duration} description={experience.description} />
                ))}
            </ul>
        </section>
    );
}