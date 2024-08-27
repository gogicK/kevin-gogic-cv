import { Link } from "react-router-dom"
import Icon from "../Icon"
import DownloadButton from "./DownloadButton"

const Navbar = () => {
      return (
            <nav className="font-poppins font-bold flex items-center lg:justify-end space-x-4 justify-center min-h-[76px] p-4 sticky top-0 z-10 bg-white shadow-xl">
                  <input className="peer hidden" type="checkbox" id="menu-toggle" />
                  <div className="absolute left-0 top-4">{Icon.logo}</div>
                  <ul className="ps-0 hidden text-center lg:!flex lg:!items-center lg:!justify-items-center lg:space-x-4 peer-checked:ml-0 peer-checked:block  peer-checked:space-y-4 lg:!space-y-0" id="menu">
                        {[
                              ['Accueil', '/kevin-gogic-cv/'],
                              ['Portfolio', '/kevin-gogic-cv/home'],
                              ['À propos', '/kevin-gogic-cv/about'],
                        ].map(([title, url], index) => (
                              <li key={index}>
                                    <Link to={url} className="rounded-lg px-3 py-2 text-slate-700 hover:bg-indigo-500 hover:text-white">
                                          {title}
                                    </Link>
                              </li>
                        ))}
                        <li>
                              <Link target="_blank" to={'https://github.com/gogicK/kevin-gogic-cv'} className="rounded-lg px-3 py-2 text-indigo-500 border-indigo-500 border-2 hover:bg-indigo-500 hover:text-white">
                                    Regardez le code
                              </Link>
                        </li>
                        <li>
                              <DownloadButton url={process.env.PUBLIC_URL + '/gogic-kevin-cv-dev.pdf'} label="Téléchargez mon CV" />
                        </li>
                        <li>
                              <Link to={'/kevin-gogic-cv/contact'} className="rounded-lg px-3 py-2 text-indigo-500 border-indigo-500 border-2 hover:bg-indigo-500 hover:text-white">
                                    Contactez-moi
                              </Link>
                        </li>
                  </ul>
                  <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block absolute top-4 right-4">
                        <svg
                              className="fill-current text-gray-900"
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 20 20"
                        >
                              <title>menu</title>
                              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                  </label>
            </nav>
      )
}

export default Navbar;