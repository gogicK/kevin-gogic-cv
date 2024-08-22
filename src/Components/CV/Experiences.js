import Data from "../../Data";
import Timeline from "../Timeline";

export default function Experiences() {
    return (
        <>
            <h2 className="font-caveat font-bold text-2xl text-indigo-500">Expériences</h2>
            <div class="-my-6">
                {Data.experiences.map((experience, index) => (
                    <Timeline key={index} title={experience.title} subTitle={experience.company} date={experience.duration} description={experience.description} />
                ))}
            </div>
        </>
    );
}