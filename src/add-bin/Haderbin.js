import React, { useEffect, useState } from 'react';
import './stylesheet.css'; 
import Navbar from './Navbar';
import '/Users/macbook/my-app/src/add-bin/cc.css';

export const Haderbin = () => {
  const [members, setMembers] = useState([]);
  const [ispending, setPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/getAll_fetch_binome');
        console.log(res);
        if (!res.ok) { 
          throw new Error('Failed to fetch');
        }
        const data = await res.json();
        console.log(data);

        setMembers(data);
        setPending(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(()=>{
    console.log("this are " ,members);
  }, [members]);

  return (
    <>
      <Navbar/>
      <div className="table-wrapper" style={{marginBottom:'1300px'}}>

        <table className="fl-table ">


          <thead>
            <tr>
              <th>NAME</th>
              <th>FULL NAME 2</th>
              <th>EMAIL</th>
              <th>YEAR</th>
              <th>SPECIALITY</th>
            </tr>
          </thead>
          <tbody >
                {( members.map((member, index) => (
                <tr key={index}>
                  <td>{member.Nom}</td>
                  <td>{member.Prenom}</td>
                  <td>{member.Email}</td>
                  <td>{member.Niveau}</td>
                  <td>{member.Specialite}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}