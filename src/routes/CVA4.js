import Header from "../Components/CV/Header.js";
import Contact from "../Components/CV/InfosContact.js";
import Langues from "../Components/CV/Langues.js";
import Experiences from "../Components/CV/Experiences.js";
import Formations from "../Components/CV/Formations.js";
import Competences from "../Components/CV/Competences.js";


export default function CVA4() {
    return (
        <main className="p-5 font-poppins outline-gray-200 lg:grid lg:grid-cols-12 gap-4">
            <div className="order-1 mb-3 col-span-9"><Header /></div>
            <div className="order-2 mb-3 col-span-3 flex items-center justify-center lg:justify-end"><Contact /></div>
            <hr className="mb-3 order-3 col-span-12 border-2 rounded border-indigo-500" />
            <div className="mb-3 order-4 lg:order-5 col-span-9 ml-3"><Experiences /></div>
            <div className="mb-3 order-5 lg:order-7 col-span-9 ml-3"><Formations /></div>
            <div className="mb-3 order-6 lg:order-4 col-span-3"><Competences /></div>
            <div className="order-7 lg:order-6 col-span-3"><Langues /></div>
        </main>
    );
}
