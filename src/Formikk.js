
import React, { useState  } from 'react';
import myy from './images/illustration-grow-together.svg'
import m11 from './images/2201_w020_n001_1251a_p30_1251-removebg.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './style.css'
import { Margin } from '@mui/icons-material';


function SignInForm() {
 // const { login } = useAuth();
  const navigate = useNavigate()

  return (
    <Formik
      initialValues={{
        id: '',
        password: '',
      }}
      validationSchema={Yup.object({
        //id: Yup.string().required('Username is required'),
       // password: Yup.string().required('password is required'),
      })}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        // const url = values.Niveau === 'Student' ? 'https://oussamaboussaid.000webhostapp.com/api/login_etudiant' : 'LOGIN_ENDPOINT_FOR_PROFESSOR';
           const url = 'http://127.0.0.1:8000/api/login_etudiant';

        try {

          const res = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',

            },
            body: JSON.stringify({
              matricule: values.id,
              password: values.password,
            })
          });

          if (!res.ok) {
            const data = await res.json();
           setErrors({ id: data.message });
            throw new Error(data.message);
          }

          const data = await res.json();
          console.log(data); // Log the response datan
          if (data.message === 'login with success') {
            localStorage.setItem('token', data.token); 
          //  login();
           // Redirect to student page
             navigate("/" + data.redirect_to)
          }

        } catch (err) {
          //console.log(err);
        }

        setSubmitting(false);
      }}
    >
<Form className="signin">
  <h2 className="title" style={{ marginLeft: '-159px', marginTop: '-5px' }}>Sign in</h2>
  <div style={{  marginTop: '-3px' }}>
  <div className="input-field "style={{  marginBottom: '20px' }}>
    <i className="fas fa-user"></i>
    <Field type="text" name="id" placeholder="Username" />
  </div>
  <div className="input-field "style={{  marginBottom: '20px' }}>
    <i className="fas fa-lock"></i>
    <Field type="password" name="password" placeholder="password" />
  </div>
    <div style={{display: "flex",alignItems:"center" , justifyContent:"center",marginRight: "150px"
      , fontSize:"20px", fontWeight: "600" , marginBottom:"30px"
  }}>
      <div>
       <label>
         <Field type="radio" name="Niveau" value="Student" />
        &nbsp;  &nbsp;  &nbsp; Student
          </label>
          </div>
          <div>   
        <label style={{margineft: "13px"}}>
          <Field type="radio" name="Niveau" value="Profiseur" />
           &nbsp; <spn style={{paddingLeft:"30px"}}>Professor </spn> &nbsp; 
         </label>
         </div>
      </div>
  

  <div className="btn solid " style={{ marginLeft: '120px' }}>
    <button type="submit" className="btn solid"   style={{ paddingBottom:'13px'}}>Login</button>
  </div>
  </div>
  <ErrorMessage name="id">
  {errorMessage => <div style={{ color: 'red' }}>{errorMessage}</div>}
</ErrorMessage>
  

</Form>
    </Formik>
  );
}


function SignUpForm() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        matricule: '',
        Nom: '',
        Prenom: '',
        Email:'',
        password: '',
        confirmpassword: '',
        Specialite: '',
        isCouple: false,
        Niveau: '',
        couplematricule: '',
        coupleNom: '',
        couplePrenom: '',
      }}
     
      
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        console.log('Form values:', values);
        const url = 'https://oussamaboussaid.000webhostapp.com/api/register_etudiant';

        try {
          const res = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
             },

             body: JSON.stringify({
              matricule: values.matricule,
              Email :values.Email,
              Nom: values.Nom,
              Prenom: values.Prenom,
              Niveau: values.Niveau,
              Specialite: values.Specialite,
              password: values.password,
            })
          });

          if (!res.ok) {
            const data = await res.json();
          // setErrors({ matricule: data.message });
          throw new Error(data.message);
          }

          const data = await res.json();
          console.log(data);

      

          if (values.isCouple) {
            const coupleUrl = 'https://oussamaboussaid.000webhostapp.com/api/register_etudiant';
            const coupleRes = await fetch(coupleUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                IdB: values.couplematricule,
                Nom: values.coupleNom,
                Email:values.Email,
                Prenom: values.couplePrenom,
                Niveau: values.coupleNiveau,
                matricule: values.matricule,
              })
            });

            if (!coupleRes.ok) {
              const coupleData = await coupleRes.json();
          throw new Error(coupleData.message);
            }

            const coupleData = await coupleRes.json();
            console.log(coupleData);
          }

          if (data.message === 'Utilisateur cree avec succes') {
            localStorage.setItem('token', data.token);
            navigate(`/profile/${values.matricule}`);
          }

        } catch (err) {
          console.error(err);
        }

        setSubmitting(false);
      }
    }
    >
      {({ values }) => (
        <Form className="signup">
          <h2 className="title"  style={{marginTop:"40px"}}>Sign up</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <Field type="text" name="matricule" placeholder="matricule" />
           <ErrorMessage name="matricule" component="div" className="error-message" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <Field type="text" name="Nom" placeholder="Nom" />
            <ErrorMessage name="Nom" component="div" className="error-message" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <Field type="text" name="Prenom" placeholder="Prenom" />
            <ErrorMessage name="Prenom" component="div" className="error-message" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <Field type="email" name="Email" placeholder="email" />
            <ErrorMessage name="Email" component="div" className="error-message" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <Field type="password" name="confirmpassword" placeholder="Confirm password" />
            <ErrorMessage name="confirmpassword" component="div" className="error-message" />
          </div>
       
          <div className="input-field">
            <i className="fas fa-book"></i>
            <Field type="text" name="Specialite" placeholder="Specialite" />
            <ErrorMessage name="Specialite" component="div" className="error-message" />
          </div>
          <div className="radioo"  style={{display: "flex",alignItems:"center" , justifyContent:"center"
      , fontSize:"20px", fontWeight: "600" , marginBottom:"5px" , marginLeft:"40px"
  }} >
            <label>
              <Field type="radio" name="Niveau" value="L3" />
              &nbsp; &nbsp;&nbsp; L3 
            </label>
            <label className="radioo">
              <Field type="radio" name="Niveau" value="M2" />
              &nbsp; <span style={{fontSize:"20px", fontWeight: "600" , paddingLeft:"24px"}}>  M2</span>  &nbsp; 
            </label>
            <label style={{ padding: '15px', fontSize: '20px', fontWeight: 'bold' }}>
              <Field type="checkbox" name="isCouple" checked={values.isCouple}  />
              &nbsp;  WITH BINOM
            </label>

          </div>
          {values.isCouple && (
            <>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <Field type="text" name="couplematricule" placeholder="Couple matricule" />
                <ErrorMessage name="couplematricule" component="div" className="error-message" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <Field type="text" name="coupleNom" placeholder="Couple Nom" />
                <ErrorMessage name="coupleNom" component="div" className="error-message" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <Field type="text" name="couplePrenom" placeholder="Couple Prenom" />
                <ErrorMessage name="couplePrenom" component="div" className="error-message" />
              </div>
             
            </>
          )}
          <button type="submit" className="btn">Sign up</button>
        </Form>
      )}
    </Formik>
  );
}


const Formikk = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };



  return (
    <div  className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
    
          {isSignUp ?  <SignUpForm   /> : <SignInForm />} {/* Render sign-up or sign-in form based on isSignUp state */}
       
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content" style={{marginTop:"115px"}}>
            <h3 tyle={ { fontSize:'33px', fontWeight: '900'}}>New here ?</h3>
            <p style={ {fontSize:'17px',   fontWeight: '600'}}> 
            Please click on the Sign up button if you dont have an existing  account

            </p>
            <button className="btn transparent" onClick={toggleMode}  style={{fontWeight: '600'}}>
              Sign up
            </button>
          </div>
          <img src={myy} className="image" alt="" style={{marginBottom:'200px'}}/>
        </div>
        <div className="panel right-panel">
          <div className="content"  style={{marginTop:"30px"}}>
            <h3 style={ { fontSize:'33px', fontWeight: '900'}}>One of us ?</h3>
            <p  style={ {fontSize:'17px',   fontWeight: '600'}}> 
            Please click on the Sign In button if you already have an existing account
            </p>
            <button className="btn transparent" onClick={toggleMode}
            style={{fontWeight: '600'}}
            >
              Sign in
            </button>
          </div>
          <img src={m11} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Formikk;





