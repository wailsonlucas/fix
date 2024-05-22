import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import { useState } from 'react';
import { Button } from '/Users/macbook/my-app/src/Button.styled.js';


export const Post = ({ user, texte, timestamp }) => {
  const [isTextFieldVisible, setTextFieldVisible] = useState(false);
const [inputValue, setInputValue] = useState('');
const [buttonText, setButtonText] = useState('Click to fill the form');

  const toggleTextField = () => {
    if (isTextFieldVisible) {
      setTextFieldVisible(false);
      setButtonText('Click to fill the form');
      setInputValue(""); // Resetting inputValue to an empty string

    } else {
      setTextFieldVisible(true);
      setButtonText('Cancel');
    }
  };
  
  const onButtonClick = () => {
    toggleTextField();
  };
  
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>

      <div  >
  <div className="post__image" style={{ paddingLeft: '40px', fontSize: '16px', fontFamily: 'Arial, sans-serif',lineHeight: '1.7'  }}>
    "In our latest web science project, 
    we delve into the intricate world of data privacy and user experience optimization.
     Leveraging advanced algorithms and machine learning techniques,
      we aim to revolutionize how websites handle personal data while enhancing user engagement. 
     Through interdisciplinary collaboration, we explore the intersection of technology, ethics, and design to 
     create a more secure and user-centric web environment. 
    Join us in shaping the future of web science!"
  </div>
  <div style={{ display:'flex', justifyContent:'center' , alignItems: 'flex-start', marginTop: '110px' }} >
    <Button style={{marginRight:"30px" ,} } > APPLY</Button>
    <div>
    <input
      type="button"
      name="answer"
      value={buttonText}
      onClick={onButtonClick}
      style={{
        paddingTop: "12px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        ":hover": {
          backgroundColor: "lightgray",
        },
      }}
    />
    {isTextFieldVisible && (
      <textarea
      id="textInput"
      style={{ width: "300px",height:"80px", whiteSpace: "pre-wrap"  ,marginTop: "10px"}}
        value={inputValue}
        onChange={onInputChange}
        placeholder="Aplly with your information and motivaition..."
      />
    )}
  </div>


  </div>
</div>

    </div>
    
  );
}

