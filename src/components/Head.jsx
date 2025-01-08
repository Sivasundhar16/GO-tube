import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/navSlice";

export const Head = () => {
  const dispatch = useDispatch();

  const togglemenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col items-center my-2 shadow-lg">
      <div className="flex items-center">
        <img
          onClick={() => togglemenuHandler()}
          className="h-5 m-3 col-span-3"
          src="https://t3.ftcdn.net/jpg/01/09/45/80/240_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg"
          alt="menu"
        />
      </div>

      <div className="flex items-center justify-center col-span-6 space-x-0">
        <a href="/">
          <img
            className="h-12"
            src="https://imgs.search.brave.com/TgMT524wUGVW17rXOu4J2JqpVl7tl2SeEjtrYnyFCgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzEwLzEwLzI5/LzM2MF9GXzIxMDEw/Mjk2NV9JSjA3YldV/UUN2VHR2bkN4UGNV/WjZtanJsUWdsQjZy/Si5qcGc"
            alt="Goutube Logo"
          />
        </a>
        <input
          className="h-8 text-center rounded-l-full w-72 uppercase bg-gray-300 border-none outline-none"
          type="text"
          placeholder="Search"
        />
        <button className="uppercase text-center py-1 bg-slate-500 px-4 text-white rounded-r-full border-none">
          Search
        </button>
      </div>

      <div className="flex justify-end items-center col-span-3 ">
        <img
          className="h-8"
          src="https://imgs.search.brave.com/UqIPtFQTN21z71iv43mJL78qBF20hlF1ovB4k3qLq5Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzE5LzI2LzQ2/LzM2MF9GXzYxOTI2/NDY4MF94MlBCZEdM/RjU0c0ZlN2tUQnRB/dlpuUHlYZ3ZhUncw/WS5qcGc"
          alt="user-icon"
        />
      </div>
    </div>
  );
};
