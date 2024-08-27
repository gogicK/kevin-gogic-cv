import Data from "../../Data";

export default function Interets() {
    return (
        <>
            <h2 className="font-bold text-center lg:text-left text-2xl text-indigo-500">Centre d'intérêts</h2>
            <ul>
                {Data.interets.map((interest, index) => (
                    <li className="text-lg font-bold text-slate-900" key={index}>{interest}</li>
                ))}
            </ul>
        </>
    );
}