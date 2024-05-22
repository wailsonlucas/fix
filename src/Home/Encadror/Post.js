import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React from "react";
import "../Student/Post/Post.css";
import { Button } from '/Users/macbook/my-app/src/Button.styled.js';

export const Post = ({ user, texte, timestamp }) => {
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
  <div style={{ display:'flex', justifyContent:'center' ,  marginTop: '40px' }} >
   

  </div>
</div>

    </div>
    
  );
}

