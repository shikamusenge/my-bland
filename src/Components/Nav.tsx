import { useState } from "react";
import { FaBars } from "react-icons/fa6";
function Nav() {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <nav className="h-20 flex bg-gradient-to-b z-40 md:overflow-hidden from-blue-700 to-slate-800 gap-3 sticky top-0 text-lime-50 items-center justify-between">
      <div className="grid grid-cols-3 md:grid-cols-2 w-full items-center">
        <div className="nav-bar-bland md:w-3/6">
          <div className="ml-[3vw] text-center text-lg font-extrabold ">
            <span className="mx-3 text-green-700 font-sans">SHIKAMUSENGE</span>
            Philemon
          </div>
        </div>
        <div
          className={`${
            isNavOpen &&
            "absolute md:relative top-0 md:max-w-fit overflow-hidden md:block md:w-fit  z-50 bg-gradient-to-bl from-blue-500 to-slate-800 gap-0 px-4 mt-20 h-screen md:mt-0 md:h-full md:bg-none md:z-40 md:top-auto"
          }`}
        >
          <div
            className={`${
              isNavOpen ? "flex" : "hidden"
            } w-[100vw] md:flex flex-col gap-10 md:flex-row my-2 font-semibold`}
          >
            <a onClick={() => setNavOpen(false)} href="/">
              Home
            </a>
            <a onClick={() => setNavOpen(false)} href="/#about">
              About
            </a>
            <a onClick={() => setNavOpen(false)} href="/#skills">
              Skills
            </a>
            <a onClick={() => setNavOpen(false)} href="/#certification">
              Certification
            </a>
            <a onClick={() => setNavOpen(false)} href="/#portifolio">
              Portifolio
            </a>
            <a onClick={() => setNavOpen(false)} href="/#contact">
              Contuct
            </a>
          </div>
        </div>
      </div>
      <div className="md:hidden mr-4 text-2xl cursor-pointer hover:text-green-300 ">
        {!isNavOpen ? (
          <FaBars onClick={() => setNavOpen(true)} />
        ) : (
          <span
            className=" text-2xl px-2 border rounded-md cursor-pointer"
            onClick={() => setNavOpen(false)}
          >
            X
          </span>
        )}
      </div>
    </nav>
  );
}

export default Nav;
