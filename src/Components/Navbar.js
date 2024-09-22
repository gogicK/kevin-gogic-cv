import { Link } from "react-router-dom"
import Icon from "../Icon"
import DownloadButton from "./DownloadButton"


export default function Navbar() {
      function closeMenu() {
            const menu = document.getElementById('menu-toggle');
            if (menu) {
                  if (menu.checked)
                        menu.checked = false;
            }
      }

      function toggleMenu() {
            const menu = document.getElementById('menu-toggle');
            if (menu) {
                  menu.checked = menu.checked ? false : true;
            }
      }

      return (
            <>
                  <nav className="font-poppins font-bold flex items-center lg:justify-end space-x-4 justify-center min-h-[76px] p-4 sticky top-0 z-10 bg-white shadow-xl">
                        <input className="peer hidden" type="checkbox" id="menu-toggle" />
                        <div className="absolute left-0 top-4"><Link onClick={closeMenu} to={'/'} >{Icon.logo}</Link></div>
                        <ul className="ps-0 hidden text-center lg:!flex lg:!items-center lg:!justify-center lg:!space-x-4 peer-checked:ml-0 peer-checked:block  peer-checked:space-y-6 lg:!space-y-0" id="menu">
                              {[
                                    ['Accueil', '/'],
                                    ['CV classique', '/cvA4'],
                                    ['À propos', '/about'],
                              ].map(([title, url], index) => (
                                    <li key={index}>
                                          <Link onClick={closeMenu} to={url} className="rounded-lg px-3 py-2 text-slate-700 hover:bg-indigo-500 hover:text-white">
                                                {title}
                                          </Link>
                                    </li>
                              ))}
                              <li>
                                    <Link onClick={closeMenu} target="_blank" to={'https://github.com/gogicK/kevin-webdev'} className="rounded-lg px-3 py-2 text-indigo-500 border-indigo-500 border-2 hover:bg-indigo-500 hover:text-white">
                                          Regardez le code
                                    </Link>
                              </li>
                              <li>
                                    <DownloadButton onClick={closeMenu} url={process.env.PUBLIC_URL + '/gogic-kevin-cv-dev.pdf'} label="Téléchargez mon CV" />
                              </li>
                              <li>
                                    <Link onClick={closeMenu} to={'/contact'} className="rounded-lg px-3 py-2 text-indigo-500 border-indigo-500 border-2 hover:bg-indigo-500 hover:text-white">
                                          Contactez-moi
                                    </Link>
                              </li>

                        </ul>
                        <svg onClick={toggleMenu}
                              className="animate-[wiggle_2s_linear_infinite] fill-current text-gray-900 cursor-pointer lg:hidden block absolute top-4 right-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 20 20"
                        >
                              <title>menu</title>
                              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                  </nav >
            </>
      )
}
