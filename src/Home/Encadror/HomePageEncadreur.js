import React from "react";
import "/Users/macbook/my-app/src/Home/Student/HomePage.css";
import  { SidebarEncadreur }  from "../Encadror/SidebarEncadreur";
import { Outlet } from "react-router-dom";
export const  HomePageEncadreur =()=> {
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
        <SidebarEncadreur />
      </div>
      <div className="homepage__timeline">
        <Outlet/>
       </div>
    </div>
  );
}

