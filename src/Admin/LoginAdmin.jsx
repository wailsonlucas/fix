import React  from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//we nedd useNavigate hook to change route after login
import { useNavigate } from 'react-router-dom'


export const  LoginAdmin=()=> {
    // const { login } = useAuth();
    //initiate useNavigate hook here
    const navigate = useNavigate()

     return (
       <Formik
         initialValues={{
           username: '',
           password: '',
         }}
         validationSchema={Yup.object({
           //username: Yup.string().required('Username is required'),
          // password: Yup.string().required('password is required'),
         })}
         onSubmit={async (values, { setSubmitting, setErrors }) => {
           const url = 'http://127.0.0.1:8000/api/login_etudiant';
   
           try {
             const token = localStorage.getItem('token');
   
             const res = await fetch(url, {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}` // Send the token

               },
               body: JSON.stringify({
                 matricule: values.username,
                 password: values.password,
               })
             });
   
             if (!res.ok) {
               const data = await res.json();
              setErrors({ username: data.message });
               throw new Error(data.message);
             }
   
             const data = await res.json();
             console.log(data); // Log the response data
             if (data.message === 'login with success') {
               localStorage.setItem('token', data.token); // Store the token
             //  login();
              // Redirect to student page
               navigate("/" + data.redirect_to)
             }
   
           } catch (err) {
             console.error(err);
           }
   
           setSubmitting(false);
         }}
       >
   <Form className="signin" style={{marginTop:"170px" , left:"50%" , }}>
     <h2 className="title" style={{ marginLeft: '-159px', marginTop: '-5px' }}>Sign in</h2>
     <div style={{  marginTop: '-3px' }}>
     <div className="input-field "style={{  marginBottom: '20px' }}>
       <i className="fas fa-user"></i>
       <Field type="text" name="username" placeholder="Username" />
     </div>
     <div className="input-field "style={{  marginBottom: '20px' }}>
       <i className="fas fa-lock"></i>
       <Field type="password" name="password" placeholder="password" />
     </div>
       <div style={{display: "flex",alignItems:"center" , justifyContent:"center",marginRight: "150px"
         , fontSize:"20px", fontWeight: "600" , marginBottom:"30px"
     }}>
      
         </div>
     
   
     <div className="btn solid " style={{ marginLeft: '120px' }}>
       <button type="submit" className="btn solid"   style={{ paddingBottom:'13px'}}>Login</button>
     </div>
     </div>
     <ErrorMessage name="username">
     {errorMessage => <div style={{ color: 'red' }}>{errorMessage}</div>}
   </ErrorMessage>
     
   
   </Form>
       </Formik>
     );
   }
   