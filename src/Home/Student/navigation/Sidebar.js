import React from "react";
import "../navigation/Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LogoutIcon from '@mui/icons-material/Logout';
///import { useDispatch, useSelector } from "react-redux";
//import { signOut } from "firebase/auth";
//import { logoutUser } from "../features/userSlice";
//import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import UploadFileIcon from '@mui/icons-material/UploadFile';
export const  Sidebar = () =>

{
  const navigate = useNavigate();

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
      <button className="sidenav__button" onClick={() => navigate("")}>
          <HomeIcon />
          <span>Home</span>
        </button>
      
       
        <button className="sidenav__button" onClick={() => navigate("propose")}>
          <ChatIcon />
          <span>Date</span>
        </button>
        <button className="sidenav__button" onClick={() => navigate("propose")}>
        <BookmarkBorderIcon />
                 <span>Saved-Project</span>
        </button>
        <button className="sidenav__button" onClick={() => navigate("propose")}>
          <AddCircleOutlineIcon />
          <span>Propose-Idea</span>
        </button>
        <button className="sidenav__button" onClick={() => navigate("form")}>
          <AddCircleOutlineIcon />
          <span>Extern-Pfe</span>
        </button>
 

      

        <button className="sidenav__button" onClick={() => navigate("upload")}>
          <UploadFileIcon />
          <span>Upload-File</span>
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

