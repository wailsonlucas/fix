import { useState, useEffect } from "react";
import axios from "axios";
import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header from "../global/Header";

export const Feedback = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const faqss = [
    {
      question: "Track post",
      answer: "You can track your order by logging into your account and accessing the 'Order ' section."
    },
    {
      question: "Payment app",
      answer: " accept all major credit cards, PayPal, and bank transfers for payment."
    },
    {
      question: "   Extern project",
      answer: "Yes, we offer international shipping to most countries. Shipping costs may vary depending on the destination."
    },
    {
      question: " Return an item",
      answer: "To return an item, please contact our customer service team within 30 days of receiving your order."
    },
   
  ];
  



  return (


    <Box m="20px">
    <Header title="Projects"  />
  
    {faqss.map((faq, index) => (
      <Accordion key={index} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="#2aa84c" variant="h4">
            {faq.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  fontSize="18px">
            {faq.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
  );
};




//////////////////////

// function put it in comment() {
//     { /* QUESTIONS ACCORDIONS */ }
//     <Box flex="1 1 100%" ml="15px">
//         {questions.map((question, index) => (
//             <Accordion key={index} defaultExpanded>
//                 <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography color={colors.greenAccent[500]} variant="h5">
//                         {question.question}
//                     </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                         {question.answer}
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>
//         //))}
//         //</Box>
//         //</Box>
//         //</Box>
//         ///);))
//         //))}
//         //</Box>
//         //</Box>
//         //</Box>
//         ///);}
//   //))}
// //</Box>;
// }
// //</Box>
// //</Box>
///);
// const [questions, setQuestions] = useState([]);

// useEffect(() => {
//     // Fetch questions from API
//     fetchQuestions();
// }, []);

// const fetchQuestions = async () => {
//     try {
//         const response = await fetch("YOUR_API_ENDPOINT");
//         const data = await response.json();
//         setQuestions(data.questions); // Assuming questions are under 'questions' key in the response
//     } catch (error) {
//         console.error("Error fetching questions:", error);
//     }
// };
