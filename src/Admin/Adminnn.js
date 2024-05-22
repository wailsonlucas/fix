import React from 'react'
import { Outlet } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme"
import Sidebar  from "./Main/global/Sidebar"
import Topbar from "./Main/global/Topbar";
import "/Users/macbook/my-app/src/Admin/admin.css";


const  Adminnn =() =>{
    const [theme, colorMode] = useMode();
  return (
    <div>
          <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <Sidebar />
              <main className="content">
                < Topbar />

                <Outlet />
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      
    </div>
  )

  
}

export default Adminnn
