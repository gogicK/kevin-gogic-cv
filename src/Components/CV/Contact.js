import Data from "../../Data.js";
import Icon from "../../Icon.js";

export default function Contact() {
    const contactData = [
        { label: "Email", icon: Icon.atSign, value: Data.email },
        { label: "Phone", icon: Icon.phone, value: Data.phone },
        { label: "Location", icon: Icon.mapPin, value: Data.location },
        { label: "Permis", icon: Icon.car, value: Data.permis }
    ];
    return (
        <>
            {/*<h2 className="font-caveat font-bold text-2xl text-indigo-500">Contact</h2>*/}
            <ul className="">
                {contactData.map((contact, index) => (
                    <li className="flex" alt={contact.label} key={index}>
                        <span className="font-bold">{contact.icon}</span>
                        <span className="ml-2 text-slate-500">{contact.value}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}