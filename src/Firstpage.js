import React from "react";
import { Container } from './Container.styled'
import Header from './Header';
import { GlobalStyles } from './Global';
import Footer from './Footer'
import Formikk from './Formikk';
export  const Firstpage=() =>{
  
  return (
    <>
      <GlobalStyles/>
      <Header />

      <Container>
        <Formikk/> 
      </Container>

      <Footer />
  </>
  )
}

