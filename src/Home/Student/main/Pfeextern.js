import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Pfeextern = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px" mt="110px">
      <div style={{fontSize:"1.7rem" ,marginBottom:"46px", textAlign:"center",fontWeight:"600"}}>FILL THEM WITH  INFORMATION</div>        
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
                label="Organism"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2"  }}
              />
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
                sx={{ gridColumn: "span 2" }}
              />
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
                sx={{ gridColumn: "span 4" ,                        "& .MuiInputBase-root": {
                  height: "200px",
                  whiteSpace: "pre-wrap",
              }  ,
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
                sx={{ gridColumn: "span 4" ,                        "& .MuiInputBase-root": {
                  height: "100px",
                  whiteSpace: "pre-wrap",
              }  ,
}}
              />
                 
            </Box>      
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" variant="contained" style={{height:'45px' , width:'160px' , backgroundColor:"#ebebeb"
               ,borderradius: "50px",border: "none",boxshadow: "0 0 20px rgba(0, 0, 0, 0.15)"
            }}>
                <span style={{color:'black' , fontWeight:'bolder'}}> Send</span> 
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
  };