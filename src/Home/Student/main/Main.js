import React, { useState , useEffect} from "react";
import { Post } from "../Post/Post"
import { FaSearch } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";

import "../../Student/main/SearchBar.css";

//import Suggestions from "./Suggestions";
import "./Main.css";
import { Posta } from "../Post/Posta"
export const  Main = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  
      fetchPosts(); // Fetch posts when component mounts
    },);
  
  const fetchPosts = async () => {
    try {
      const response = await fetch("YOUR_POSTS_ENDPOINT");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data.posts); // Assuming the response has a 'posts' field containing the posts array
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };


  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
            key={post.id}
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

