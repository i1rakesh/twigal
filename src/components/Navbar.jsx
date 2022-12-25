import React from "react";
import twigal from "../assests/Twigal.png";
import { signOut } from "firebase/auth";
import "../assests/navbar";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <>
      <nav
        class="relative w-full flex flex-wrap items-center justify-between py-2 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
        
        <div className="flex">
          <button class="navbar-burger flex items-center text-blue-600 p-3 left-0">
          
            <svg
              class=" h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              
            </svg>
          </button>
          <img src={twigal} className="h-10"/>
          <div className="flex mx-2 mt-2 justify-evenly">
            <img className="object-cover rounded-full bg-black flex w-10 h-8 " src={currentUser.photoURL} alt="" />
            <span className="mx-2 font-medium">{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)} className=" border-solid border-2 border-black mx-3 uppercase font-bold bg-white hover:bg-red-600 hover:text-white px-2 rounded-md">Logout</button>
          </div>
        </div>
        
      </nav>
      <div class="navbar-menu relative z-50 hidden">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 animation-bounce max-w-sm py-6 px-6 rounded-r-2xl bg-white border-r overflow-y-auto">
          <div class="flex items-center mb-8">
            <a class="mr-auto text-3xl font-bold leading-none" href="#">
            <img src={twigal} className="h-10"/>
            </a>
            <button class="navbar-close">
              <svg
                class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
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
          </div>
          <div class="mt-auto">
            <div class="pt-6">
              <a
                class="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                href="#"
              >
                Sign in
              </a>
              <a
                class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                href="#"
              >
                Sign Up
              </a>
            </div>
            <p class="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
