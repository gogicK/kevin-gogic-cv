import Data from "../../Data";
import Timeline from "../Timeline";

export default function Formations() {
    return (
        <section>
            <h2>Formations</h2>
            <ul className="-my-6">
                {Data.formations.map((formation, index) => (
                    <Timeline key={index} title={formation.degree} subTitle={formation.university} date={formation.graduationYear} description={formation.description} />
                ))}
            </ul>
        </section>
    );
}