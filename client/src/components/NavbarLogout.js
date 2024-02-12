import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../src/BB.png";
export default function Navbar() {
  async function logoutFunction() {
   
    localStorage.removeItem("moviesToken");
    navigate(`/login`);
  }
  async function goToDashboard() {
   

    navigate(`/dashboard`);
  }
  let navigate = useNavigate();
  return (
    <div className="flex justify-between px-3 py-3 bg-slate-950 ">
      <div className="">
        <img
          onClick={() => {
            navigate(`/`);
          }}
          src={logo}
          className="cursor-pointer h-10"
        />
      </div>
      <div className="md:hidden">
        <span className="text-[#E50914] text-4xl">
          <ion-icon name="list-outline"></ion-icon>
        </span>
      </div>
      <div className="hidden md:flex  ">
        <button
          onClick={() => {
            goToDashboard();
          }}
          className="mx-2 duration-100 cursor-pointer px-8 rounded border-[#E50914] text-[#E50914] border-2 "
         
        >
        Go to dashboard
        </button>
        <button
          onClick={() => {
            logoutFunction();
          }}
          className="text-white text-xl px-8 duration-100 cursor-pointer mx-2 rounded"
          style={{ backgroundColor: "#E50914" }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
