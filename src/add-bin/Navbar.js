import React from "react";
import './stylesheet.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

const Navbar = () => {
    const linkStyle = {
        textDecoration: 'none', // Remove underline decoration
        color: 'inherit', // Inherit color from parent
        transition: 'background-color 0.3s ease', // Smooth transition on background color change
        padding: '10px 20px', // Add padding to create space around the text
        borderRadius: '20px', // Add border-radius to create a rounded shape
        fontWeight:'bold',
        textDecoration: 'none',
      
      };
  const iconStyle = {
    fontSize: '2.0em',
    marginRight: '8px',
  };

  const hud = {
    fontSize: '2.4em',
    marginRight: '8px',
    fontWeight: 'bold',
    textDecoration:'none',
    underline :'none',
    color:'black'
  };
  const listItemStyle = {
        paddingRight:'10px',
        fontSize: '1.7em',

  };

  
  
  return (
    <div className="header" style={{height:'120px', paddingTop:'35px', marginBottom:'70px'} }>
      <div className="logo">
        <FontAwesomeIcon  className="fa-brands fa-figma" style={iconStyle} />
       <Link to="/" style={hud}><span >G.PFE</span></Link> 
      </div>

      <div >
        <ul style={{marginTop:'10px'}}>
        <li style={listItemStyle}>         
          <Link to="/Haderbin" style={linkStyle}>
           HOME
           </Link>   
             
          </li>
          <li style={listItemStyle}>            <Link to="/Addnew" style={linkStyle}>
           ADD-YOURS
           </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;