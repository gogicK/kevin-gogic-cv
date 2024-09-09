import Contact from "../routes/Contact.js";
import UnderConstruction from "../Components/HomePage/UnderConstruction.js";
import Header from "../Components/HomePage/Header.js";
import Description from "../Components/HomePage/Description.js";
import InformationToast from "../Components/HomePage/InformationToast.js";

export default function HomePage() {

    return (
        <>
            <main className="w-full overflow-y-scroll min-h-[calc(100vh-76px)] relative snap-y snap-mandatory">
                <InformationToast />
                <Header />
                <Description />
                <UnderConstruction />
                <Contact />
            </main >
        </>
    );
}