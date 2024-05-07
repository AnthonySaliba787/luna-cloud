import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="fixed w-full h-24 bg-[255, 255, 255, 0.8] flex items-center justify-between px-4 backdrop-blur-xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-2 md:px-4 lg:px-8">
          Luna Cloud
        </h1>
        <div className="flex gap-4">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : ""
            }
          >
            <button className="w-[100px] md:w-[200px] py-8 font-medium hover:text-blue-400 duration-300">
              Home
            </button>
          </NavLink>
          <NavLink>
            <button className="w-[100px] md:w-[200px] py-8 font-medium hover:text-blue-400 duration-300">
              About
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
