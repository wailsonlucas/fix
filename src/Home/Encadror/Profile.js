// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { IoPersonCircleOutline } from "react-icons/io5";
import "../Encadror/Profile.css";
export const Profile = () => {
  //const [user, setUser] = useState({});
  //const [isUserUpdated, setisUserUpdated] = useState(false);

  //useEffect(() => {
    //const getProfileData = async () => {
      //try {
        //const { data } = await axios.get(`http://localhost:1337/api/users/me`, {
          //headers: {
            //Authorization: `bearer ${token}`,
          //},
        //});
        //setUser(data);
        //setisUserUpdated(false);
     // } catch (error) {
       // console.log({ error });
      //}
    //};
    //getProfileData();
  //}, [token, isUserUpdated]);

  return (
    <div className="profile">
        
      <div className="avatar">

        <div className="avatar-wrapper">
      
      
        </div>
      </div>
      <div className="body">
       <div className="profile_info"  > <span style={{fontsize: "30px",fontSize:"1.4rem"}}> Profile info</span> </div>
       
        <p style={{fontWeight:'600'}}>Full name: BENYOUNES ISMAIL</p>
        <p  style={{fontWeight:'600'}}> Email: BENYOUS@GMAIL.COM</p>
       
      </div>
    </div>
  );
};

