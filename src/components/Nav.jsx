import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="fixed w-full h-24 bg-white/70 flex items-center justify-between px-4 backdrop-blur-xl border-b z-10">
        <h1 className="w-full py-6 text-xl md:text-3xl lg:text-4xl font-bold px-2 md:px-4 lg:px-8">
          Luna Cloud
        </h1>
        <div className="grid grid-cols-3 w-96 text-center justify-center items-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : ""
            }
          >
            <button className="nav-button">Home</button>
          </NavLink>
          <NavLink>
            <button className="nav-button">Pricing</button>
          </NavLink>
          <NavLink>
            <button className="nav-button">About</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
