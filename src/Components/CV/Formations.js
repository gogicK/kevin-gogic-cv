import Data from "../../Data";
import Timeline from "../Timeline";

export default function Formations() {
    return (
        <>
            <h2 className="font-caveat font-bold text-2xl text-indigo-500">Formations</h2>
            <div className="-my-6">
                {Data.formations.map((formation, index) => (
                    <Timeline key={index} title={formation.degree} subTitle={formation.university} date={formation.graduationYear} description={formation.description} />
                ))}
            </div>
        </>
    );
}