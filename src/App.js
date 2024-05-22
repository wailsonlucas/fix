import * as React from "react";
import { useRoutes } from "react-router-dom";
import { Main } from "/Users/macbook/my-app/src/Home/Student/main/Main.js";
import { Firstpage } from "./Firstpage";
import { Haderbin } from "./add-bin/Haderbin";
import { Addnew } from "./add-bin/Addnew";
import { Dashboard } from "./Admin/Main/Dashbordd/Dashboard";
import { Teacher } from "/Users/macbook/my-app/src/Admin/Main/slice/Teacher.js";
import Invoices from "./Admin/Main/slice/invoices";
//import Bar from "./Admin/Main/slice/bar";
import { Form } from "./Admin/Main/slice/Form";
import  { Pfeextern } from "/Users/macbook/my-app/src/Home/Student/main/Pfeextern.js";
import Line from "./Admin/Main/slice/line";
import { Uploadfile } from "/Users/macbook/my-app/src/Home/Student/main/Uploadfile.js"
import { Students  } from "./Admin/Main/slice/Students";
//import Pie from "./scenes/pie";
//import FAQ from "./scenes/faq";
//import Geography from "./scenes/geography";
import { Calendar } from "./Admin/Main/slice/Calendar";
import { Feedback } from "./Admin/Main/slice/Feedback";
import "./Admin/admin.css";
import Adminnn from "./Admin/Adminnn";
import { HomePage } from "./Home/Student/HomePage";
import { HomePageEncadreur } from "../src/Home/Encadror/HomePageEncadreur";
import { Main as Mainn } from '/Users/macbook/my-app/src/Home/Encadror/Main.js';import { LoginAdmin  } from "./Admin/LoginAdmin";
import { Jury } from "./Admin/Main/slice/Jury";
import { Propose } from "./Home/Student/main/Propose";
import { Request } from "./Home/Encadror/Request";

function App() {
  //const [isSidebar, setIsSidebar] = useState(true);

  // Remove the incorrect import statement
  // import admin.Css

  // Add the correct import statement for the CSS file

  const routes = useRoutes([
    {
      path: "/",
      element: <Firstpage></Firstpage>,
    },
    {
      path: "/Main",
      element: (
        <>
          <Haderbin />
          <Addnew />
        </>
      ),
    },
    {
        path: "/Home",
        
          element: <HomePage />,
          children: [

            { path: "",
             element: <Main /> 
            },{
              path: "form",
              element: < Pfeextern/>,
            },
            {
              path: "upload",
              element: <Uploadfile />,
            },
            {
              path: "propose",
              element: <Propose />,
            }
          ],                     
    },
        {
          path: "/teacher",
          
            element:<HomePageEncadreur />,
            children: [
              { path: "",
               element: <Mainn/> 
              },{
                path: "Request",
                element: < Request/>,
              },
              
            ],
            
            
           
          },
    
    
      {
        path: "/loginAdmin",
        element: <LoginAdmin />, // Render LoginAdmin component initially
      },
          {
            path: '/Admin', // Default child route
            element: <Adminnn />, // Render Adminnn component after successful login
            children: [
              {
                path: "",
                element: <Students />, // Render nested route within Adminnn component
              },
              {
                path: "team",
                element: <Teacher />, // Render nested route within Adminnn component
              },
              {
                path: "jury",
                element: <Jury />, // Render nested route within Adminnn component
              },
              {
                path: "form",
                element: <Form />, // Render nested route within Adminnn component
              },
              {
                path: "feedback",
                element: <Feedback />, // Render nested route within Adminnn component
              },
          
              {
                path: "calendar",
                element: <Calendar />, // Render nested route within Adminnn component
              },
            ],
          },
        ],
      
          
     
        
         
      

  );


  return (
    <>
      {routes}
    </>
  );
}

export default App;
