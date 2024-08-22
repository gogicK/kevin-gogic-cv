import Header from "../Components/CV/Header.js";
import Contact from "../Components/CV/Contact.js";
import Langues from "../Components/CV/Langues.js";
import Experiences from "../Components/CV/Experiences.js";
import Formations from "../Components/CV/Formations.js";
import Competences from "../Components/CV/Competences.js";


export default function Home() {
    return (
        <main className="p-5 font-poppins outline-gray-200 md:grid md:grid-cols-5 gap-4">
            <div className="col-span-4"><Header /></div>
            <div className="col-span-1 flex items-center justify-end"><Contact /></div>
            <hr className="col-span-5 border-2 rounded border-indigo-500" />
            <div className="col-span-1"><Competences /></div>
            <div className="col-span-4"><Experiences /></div>
            <div className="col-span-1"><Langues /></div>
            <div className="col-span-4"><Formations /></div>
        </main>
    );
}
