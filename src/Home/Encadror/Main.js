import React, { useState } from "react";
import { Post } from "../Encadror/Post"
import "../Student/main/SearchBar.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import {  FormControl, InputLabel, Select, MenuItem } from "@mui/material";

//import Suggestions from "./Suggestions";
import "/Users/macbook/my-app/src/Home/Student/main/Main.css";
import { Profile } from "./Profile";
//import { useTheme } from "@mui/material/styles";
export const  Main = () => {
  const [posts, setPosts] = useState([
    {
      user: "BENYOUNES ISMAIL",
      texte: "this is a post",
      timestamp: " ",
    },
    {
      user: "BENYOUNES ISMAIL",
      texte: "this is a post",
      timestamp: "",
    },
    {
      user: "BENYOUNES ISMAIL",
      texte: "this is a post",
      timestamp: "2d",
    },
    {
      user: "BENYOUNES ISMAIL",
      texte: "this is a post",
      timestamp: "2d",
    },
  ]);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };


  return (
    <div className="timeline">
     
      <div className="timeline__left">
      <div style={{fontSize:"1.7rem" ,marginBottom:"46px", textAlign:"center",fontWeight:"600"}}>  ADD NEW</div>        

      <Box m="20px"  mb="110px">
      <div style={{fontSize:"1.7rem" ,marginBottom:"46px", textAlign:"center",fontWeight:"600"}}></div>        
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" , marginLeft:"125px" }}
              />
                            <FormControl fullWidth sx={{gridColumn: "span 4",backgroundColor:"#EFEFEF"}}>

<InputLabel id="demo-simple-select-label" sx={{color:"grey"}}>Level</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value={values.age}
label="age"
onChange={handleChange}
>
    <MenuItem value={20}>M2</MenuItem>
    <MenuItem value={30}>L3</MenuItem>
</Select>

</FormControl> 

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{
                  gridColumn: "span 4",
                  "& .MuiInputBase-root": {
                    height: "200px",
                    whiteSpace: "pre-wrap",
                  },
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Work Plan"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmEmail}
                name="confirmEmail"
                error={!!touched.confirmEmail && !!errors.confirmEmail}
                helperText={touched.confirmEmail && errors.confirmEmail}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" variant="contained" style={{height:'45px' , width:'130px' , backgroundColor:"#ebebeb"
               ,borderradius: "50px",border: "none",boxshadow: "0 0 20px rgba(0, 0, 0, 0.15)"
            }}>
                <span style={{color:'black' , fontWeight:'700',fontSize:"18px"}}> ADD</span> 
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
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
            <Profile />

      </div>
    </div>
  );
}

  


const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
  };