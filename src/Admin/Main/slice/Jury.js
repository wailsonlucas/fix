import { useState, useEffect } from "react";
import axios from "axios";
import { Box, useTheme, Typography ,TextField ,Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header from "../global/Header";

export const Jury = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const faqss = [
    {
      question: "AI TRACKING CARS",
    },
    {
      question: "TIME PLANIFICATION",
    },
    {
      question: "HOTEL MANAGMENT?",
    },
    {
      question: "How can I return an item",
    },
    {
      question: "Are PRO ",
    }
  ];
  



  return (


    <Box m="20px">
    <Header title="JURY"  />
  
    {faqss.map((faq, index) => (
      <Accordion key={index} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="#2aa84c" variant="h4">
            {faq.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <TextField id="field1" label="ID 1" variant="outlined" style={{ marginRight: '10px' }} />
    <TextField id="field2" label="ID 2" variant="outlined" style={{ marginRight: '10px' }} />
    <Button variant="contained" color="primary"><span style={{fontSize:"15px"}}>Send</span></Button>
  </div>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
  );
};