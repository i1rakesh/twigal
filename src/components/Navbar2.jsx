import { useState } from "react"; // import state
import twigal from "../assests/Twigal.png";
import { signOut } from "firebase/auth";

import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const { currentUser } = useContext(AuthContext);
  return (
    <div class=" ml-24vw w-75vw h-16 flex flex-wrap my-2 rounded-2xl items-center bg-gray-100/50 backdrop-blur-sm text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
      <nav>
        <section className="MOBILE-MENU flex items-center text-blue-600 p-3 left-0 lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <svg
              class=" h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </div>
          <a href="/">
            <img src={twigal} className="h-10 " />
          </a>
          <button
            onClick={() => signOut(auth)}
            className=" border-solid border-2 border-black mx-3 uppercase font-bold bg-white px-2  rounded-md hover:bg-red-600 hover:text-white"
          >
            Logout
          </button>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div class="flex flex-col w-4/6 animation-bounce  py-6 px-6 rounded-r-2xl bg-white border-r">
              <img src={twigal} className="h-14" />

              <ul>
                <li class="mb-1">
                  <a
                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class="mb-1">
                  <a
                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li class="mb-1">
                  <a
                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li class="mb-1">
                  <a
                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li class="mb-1">
                  <a
                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div class="mt-auto">
                <button
                  onClick={() => signOut(auth)}
                  className=" border-solid border-2 border-black mx-3 uppercase font-bold bg-white hover:bg-red-600 hover:text-white px-2 rounded-md"
                >
                  Logout
                </button>
                <p class="my-4 text-xs text-center text-gray-400">
                  <span>Copyright © 2021</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden w-75vw  flex  justify-around lg:flex">
          <a href="/">
            <img src={twigal} className="h-8 " />
          </a>

          <li>
            <a
              href="/about"
              className="hover:bg-blue-100 hover:text-blue-600 p-2 rounded-lg "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className="hover:bg-blue-100 hover:text-blue-600 p-2 rounded-lg "
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:bg-blue-100 hover:text-blue-600 p-2 rounded-lg "
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:bg-blue-100 hover:text-blue-600 p-2 rounded-lg "
            >
              Contact Us
            </a>
          </li>
          <button
            onClick={() => signOut(auth)}
            className="uppercase font-bold  hover:bg-red-600 hover:text-white px-2 rounded-md"
          >
            Logout
          </button>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 40%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
