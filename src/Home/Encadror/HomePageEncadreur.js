import { useState, useEffect} from 'react'
import React from "react";
import "../Student/HomePage.css";
import  { SidebarEncadreur }  from "../Encadror/SidebarEncadreur";
import { Outlet } from "react-router-dom";
// my edited code
import { useNavigate } from 'react-router-dom';


export const  HomePageEncadreur =()=> {
  let [data, setData] = useState(null)
  let [loading, setLoading] = useState(true)
  let navigate = useNavigate()
  
  useEffect(() => {
    get_data()
  }, [])

  async function get_data(){
    //get the token from localStorage
    let token = localStorage.getItem('token')
    try {
      let req = await fetch('http://127.0.0.1:8000/api/teacher_data', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'x-authorization':token // attach the token to custom header
        }
      })
     
      if(!req.ok) return navigate(-1)  //in case user try to access an un-authorized route will be redirected back
      let res = await req.json()
      setData(res)  //in case user is allowed to acces the endoint we store his data in a local state
      setLoading(false) //stop the loading flag
    }catch(err){
      console.error(err)
    }
  }

  return (
    <>
    {
      loading?
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100%",
      width:"100%",
      fontSize:"2rem"
    }}>Please wait</div>
    :
    <div className="homepage">
      <div className="homepage__navWraper">
        <SidebarEncadreur />
      </div>
      <div className="homepage__timeline">
        <p>DATA :</p>
         <p>id: {data.id}</p>
         <p>username: {data.username}</p>
         <p>role: {data.role}</p>

        <Outlet/>

       </div>
    </div>
    }
    </>
  );
}

