import { Link } from "react-router-dom"
import Icon from "../Icon"

const Navbar = () => {
      return (
            <nav className="relative font-poppins font-bold flex items-center md:justify-end space-x-4 justify-center min-h-11">
                  <input className="peer hidden" type="checkbox" id="menu-toggle" />
                  <div className="absolute left-0 top-0">{Icon.logo}</div>
                  <ul className="ps-0 hidden text-center md:!flex md:!items-center md:!justify-items-center md:space-x-4 peer-checked:ml-0 peer-checked:block  peer-checked:space-y-4 md:!space-y-0" id="menu">
                        {[
                              ['Accueil', '/kevin-gogic-cv'],
                              ['À propos', '/kevin-gogic-cv/about'],
                              ['TicToc', '/kevin-gogic-cv/tictoc'],
                        ].map(([title, url], index) => (
                              <li key={index}>
                                    <Link to={url} className="rounded-lg px-3 py-2 text-slate-700 hover:bg-indigo-500 hover:text-white">
                                          {title}
                                    </Link>
                              </li>
                        ))}
                        <li>
                              <button className="rounded-lg px-3 py-2 text-indigo-500 border-indigo-500 border-2 hover:bg-indigo-500 hover:text-white">
                                    Regardez le code
                              </button>
                        </li>
                        <li>
                              <button className="rounded-lg px-3 py-2 text-indigo-500 border-indigo-500 border-2 hover:bg-indigo-500 hover:text-white">
                                    Téléchargez mon CV
                              </button>
                        </li>
                        <li>
                              <button className="rounded-lg px-3 py-2 text-indigo-500 border-indigo-500 border-2 hover:bg-indigo-500 hover:text-white">
                                    Contactez-moi
                              </button>
                        </li>
                  </ul>
                  <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block absolute top-0 right-0">
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