import Data from "../../Data";

export default function Interets() {
    return (
        <>
            <h2 className="text-center lg:text-left">Centre d'intérêts</h2>
            <ul>
                {Data.interets.map((interest, index) => (
                    <li className="text-lg font-bold text-slate-900" key={index}>{interest}</li>
                ))}
            </ul>
        </>
    );
}