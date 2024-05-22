import { useState, useEffect } from "react";
import { Box, useTheme, Typography ,TextField ,Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../Admin/theme";

export const Request = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const faqss = [
    {
      question: "khennine Youcef",
    },
    {
      question: "Mohamed Cherif",
    },
    {
      question: "Ahemd Benali",
    },
    {
      question: "Laissaoui Abdelaziz",
    },
   
  ];
  



  return (


    <Box m="20px">
  
    {faqss.map((faq, index) => (
      <Accordion key={index} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="black" variant="h5">
            {faq.question}
          </Typography>
        </AccordionSummary>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="black" variant="h5">
            Track Cars
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography color="black" variant="h6">
        I am writing this letter to highly recommend  for the track cars
         project development position within your esteemed organization.
          I have had the pleasure of working closely with  you, where they have consistently 
          demonstrated exceptional skills and dedication.

Throughout their tenure, has exhibited a keen interest and passion.


          </Typography>

        </AccordionDetails>

        <AccordionDetails>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
    <Button variant="contained" style={{ backgroundColor: '#7fc7c2', color: 'white' ,fontWeight:'bolder' }} ><span style={{fontSize:"15px"}}>Accept</span></Button>
    <Button variant="contained" style={{ backgroundColor: '#ffffff', color: 'black' ,boxShadow:'black' ,fontWeight:'bolder' }} ><span style={{fontSize:"15px"}}>Reject</span></Button>
  </div>
</AccordionDetails>
      </Accordion>
    ))}
  </Box>
  );
};