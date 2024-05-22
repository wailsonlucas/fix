import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './stylesheet2.css';

export const Addnew = () => {
  return (
    <>
      <div className="container2">
        <div className="forms-container2">
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

function SignUpForm() {
  return (
    <Formik
      initialValues={{
        matricule: '',
        firstName: '',
        lastName: '',
        Email: '',
        specialite: '',
        Niveau: '',
      }}
      validationSchema={Yup.object({
        matricule: Yup.number().required('Required'),
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        Email: Yup.string().email('Invalid email').required('Required'),
        specialite: Yup.string().required('Required'),
        Niveau: Yup.string().max(2, 'Must be 2 characters or less').required('Required'),
      })}
      onSubmit={(values, { setSubmitting ,resetForm}) => {
        console.log(values) ;
        axios.post('http://127.0.0.1:8000/api/ajouter_fetch_binome', {
          matricule: values.matricule,
          Nom: values.firstName,
          Prenom : values.lastName,
          Niveau: values.Niveau,
          Specialite: values.specialite,
          Email: values.Email,

        })
        .then(response => {
          console.log(response);
          setSubmitting(false);
          resetForm();
        })
        .catch(error => {
          console.log(error);
          setSubmitting(false);
          if (error.response && error.response.status === 409) {
            // HTTP status code 409 indicates conflict (i.e., data already exists)
            // You can display an error message to the user here
            alert('Error: Data already exists');
          } else {
            // For other types of errors, you can display a generic error message
            alert(' Error occurred. Maybe you are existe try again later.');
          }
    
        });    console.log(values)  }}
        
    >
      <Form className="sign-up-form">
        <h2 className="title">PUT YOUR INFORMATIONS </h2>
        <div className="input-field">
          <i className="fas fa-id-card"></i>
          <Field type="number" name="matricule" placeholder="ID" />
          <ErrorMessage name="matricule" component="div" className="error-message" />
        </div>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <Field type="text" name="firstName" placeholder="First Name" />
          <ErrorMessage name="firstName" component="div" className="error-message" />
        </div>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <Field type="text" name="lastName" placeholder="Last Name" />
          <ErrorMessage name="lastName" component="div" className="error-message" />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <Field type="email" name="Email" placeholder="Email" />
          <ErrorMessage name="email" component="div" className="error-message" />
        </div>
        <div className="input-field">
          <i className="fas fa-book"></i>
          <Field type="text" name="specialite" placeholder="Specialite" />
          <ErrorMessage name="specialite" component="div" className="error-message" />
        </div>
        <div className="input-field">
          <i className="fas fa-graduation-cap"></i>
          <Field type="text" name="Niveau" placeholder="Niveau" />
          <ErrorMessage name="Niveau" component="div" className="error-message" />
        </div>
        
        <button type="submit" className="btn">
          REGISTER
        </button>
      </Form>
    </Formik>
  );
}