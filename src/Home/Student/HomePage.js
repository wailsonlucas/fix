import React from "react";
import "./HomePage.css";
import { Sidebar } from "./navigation/Sidebar";
import { Main } from "../Student/main/Main";
import { Outlet } from "react-router-dom";
export const  HomePage =()=> {
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
        <Sidebar />
      </div>
      <div className="homepage__timeline">
         <Outlet />
       </div>
    </div>
  );
}

