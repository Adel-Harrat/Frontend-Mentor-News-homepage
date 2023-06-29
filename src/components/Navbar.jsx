import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between mt-6 lg:mt-16">
        <a href="#">
          <img src="./images/logo.svg" alt="logo" />
        </a>

        <button onClick={() => setMenuOpen(true)} className="lg:hidden">
          <img
            src="./images/icon-menu.svg"
            alt="icon menu"
            className="h-5 w-10"
          />
        </button>
        <ul className="hidden lg:flex lg:items-center lg:justify-between lg:gap-x-8">
          <li>
            <a
              className="text-base text-custom-dark-grayish-blue hover:text-custom-soft-red block transition-all ease-in-out duration-500"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-base text-custom-dark-grayish-blue hover:text-custom-soft-red block transition-all ease-in-out duration-500"
              href="#"
            >
              New
            </a>
          </li>
          <li>
            <a
              className="text-base text-custom-dark-grayish-blue hover:text-custom-soft-red block transition-all ease-in-out duration-500"
              href="#"
            >
              Popular
            </a>
          </li>
          <li>
            <a
              className="text-base text-custom-dark-grayish-blue hover:text-custom-soft-red block transition-all ease-in-out duration-500"
              href="#"
            >
              Trending
            </a>
          </li>
          <li>
            <a
              className="text-base text-custom-dark-grayish-blue hover:text-custom-soft-red block transition-all ease-in-out duration-500"
              href="#"
            >
              Categories
            </a>
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black  z-10 transition-all ease-in-out duration-100 ${
          menuOpen ? "bg-opacity-50" : "hidden"
        }`}
      ></div>

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white w-2/3 z-20 transition-all ease-in-out duration-500 ${
          menuOpen ? "" : "translate-x-full"
        }`}
      >
        <button
          className="float-right clear-both m-5 hover:bg-gray-50 p-5 rounded-full active:bg-gray-100"
          onClick={() => setMenuOpen(false)}
        >
          <img src="./images/icon-menu-close.svg" alt="close menu" />
        </button>

        <ul className="mt-40 flex flex-col space-y-5 px-6">
          <li>
            <a className="text-lg hover:text-custom-soft-red block" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-lg hover:text-custom-soft-red block" href="#">
              New
            </a>
          </li>
          <li>
            <a className="text-lg hover:text-custom-soft-red block" href="#">
              Popular
            </a>
          </li>
          <li>
            <a className="text-lg hover:text-custom-soft-red block" href="#">
              Trending
            </a>
          </li>
          <li>
            <a className="text-lg hover:text-custom-soft-red block" href="#">
              Categories
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
