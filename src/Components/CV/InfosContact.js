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
        <ul>
            {contactData.map((contact, index) => (
                <li className="flex items-center" alt={contact.label} key={index}>
                    <span className="font-bold">{contact.icon}</span>
                    <span className="ml-2 text-slate-500">{contact.value}</span>
                </li>
            ))}
        </ul>
    );
}