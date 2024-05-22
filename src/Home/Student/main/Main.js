import React, { useState } from "react";
import { Post } from "../Post/Post"
import { FaSearch } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";

import "/Users/macbook/my-app/src/Home/Student/main/SearchBar.css";

//import Suggestions from "./Suggestions";
import "./Main.css";
import { Posta } from "../Post/Posta"
export const  Main = () => {
  const [posts, setPosts] = useState([
    {
      user: "MOHAMEF FOUAD",
      texte: "this is a post",
      timestamp: " 1d",
    },
    {
      user: "IBRAHIM BSSA",
      texte: "this is a post",
      timestamp: "1d",
    },
    {
      user: "mariussss",
      texte: "this is a post",
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      texte: "this is a post",
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              texte={post.texte}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
           Doctors Suggestions
           <div className="input-wrapper">
     < SearchIcon />
      <input
        placeholder="Type to search..."
    
      />
    </div>

      </div>
    </div>
  );
}

//<Suggestions />

