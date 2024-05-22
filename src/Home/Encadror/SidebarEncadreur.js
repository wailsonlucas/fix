import React from "react";
import "/Users/macbook/my-app/src/Home/Student/navigation/Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LogoutIcon from '@mui/icons-material/Logout';
import VisibilityIcon from '@mui/icons-material/Visibility';
///import { useDispatch, useSelector } from "react-redux";
//import { signOut } from "firebase/auth";
//import { logoutUser } from "../features/userSlice";
//import { auth } from "../firebase";

export const  SidebarEncadreur = () =>{
/*
const user = useSelector((state) => state.data.user.user);
const dispatch = useDispatch();
const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
};
*/
  return (
    <div className="sidenav" >
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </button>
      
       
        <button className="sidenav__button">
          <ChatIcon />
          <span>Request</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>Valide</span>
        </button>
        <button className="sidenav__button">
          <VisibilityIcon />
          <span>Student Propose</span>
        </button>
      

          <button className="sidenav__button">
        <LogoutIcon />
                  <span style={{ paddingLeft: '15px' }}>logout</span>
        </button>
    
            </div>
      <div className="sidenav__more">
      </div>
    </div>
  );
}

