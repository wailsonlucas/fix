import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import "../../../Admin/admin.css"

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box 
      sx={{
        "& .pro-sidebar-inner": {
          background:  "#fffefe !important ",
          
        },
        "& .pro-icon-wrapper": {
          backgroundColor: " black !important",
        },
        "& .pro-inner-item": {
          padding: "10px 13px 5px 15px !important",
        },
        "& .pro-inner-item:hover": {
          color: "black !important",
        },
        "& .pro-menu-item.active": {
          color: "black !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} style={{ width: "100%", height: "900px" }}>
        <Menu iconShape="circle">
          {/* LOGO AND MENU ICON */}
          <Box paddingLeft={  "6%"} paddingTop={ "11%"}>
            <Item
              title={
                <Typography sx={{ fontSize: "25px", fontWeight: "800" , color:"black"}}>
                  Dashboard
                </Typography>
              }
              to="/Admin/"
              icon={<HomeOutlinedIcon sx={{ fontSize: 30 , color:"black" , backgroundColor:"white", border:"none" }} />}
              selected={selected}
              setSelected={setSelected}
              style={{ color: "red" }} // Change the color here
            />
            <Typography
              variant="h6"
              color="black"
              sx={{ m: "20px 0 5px 20px" ,fontSize: "19px"  }}
            >
              Data
            </Typography>
            <Item
              title={
            
                <Typography sx={{ fontSize: "16px", fontWeight: "bolder",  color: "black" }}>
                  DOCTORS
                </Typography>
              }
              to="team"
              icon={<PeopleOutlinedIcon sx={{ color: "black", backgroundColor: "white" ,boxDecorationBreak:'slice'}} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={
                <Typography sx={{ fontSize: "16px", fontWeight: "bolder",  color: "black" }}>
                 Students
                </Typography>
              }
              to=""
              icon={<ContactsOutlinedIcon sx ={{ color:"black" ,backgroundColor:"white", border:"none"}} />}
              selected={selected}
              setSelected={setSelected}
            />
            
             <Item
              title={
                <Typography sx={{ fontSize: "16px", fontWeight: "bolder", color: "black" }}>
                 Project 
                </Typography>
              }
              to="feedback"
              icon={<HelpOutlineOutlinedIcon sx ={{ color:"black" ,backgroundColor:"white", border:"none"}} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color="black"
              
              sx={{ m: "15px 0 5px 20px" ,fontSize: "19px"  }}
            >
              Function
            </Typography>
            <Item
              title={
                <Typography sx={{ fontSize: "16px", fontWeight: "bolder",  color: "black" }}>
                   Create Profile
                </Typography>
              }
              to="form"
              icon={<PersonOutlinedIcon  sx ={{ color:"black" ,backgroundColor:"white", border:"none"}}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={
                <Typography sx={{ fontSize: "16px", fontWeight: "bolder",  color: "black" }}>
                  Orgnize Date
                </Typography>
              }
              to="calendar"
              icon={<CalendarTodayOutlinedIcon  sx ={{ color:"black" ,backgroundColor:"white", border:"none"}}/>}
              selected={selected}
              setSelected={setSelected}
            />
                       <Item
              title={
                <Typography sx={{ fontSize: "16px", fontWeight: "bolder",  color: "black" }}>
                 Jury
                </Typography>
              }
              to="jury"
              icon={<ReceiptOutlinedIcon  sx ={{ color:"black" ,backgroundColor:"white", border:"none"}}/>}
              selected={selected}
              setSelected={setSelected}
            />


            <Typography
              variant="h6"
              color="black"
              sx={{ m: "15px 0 15px 20px" ,fontSize: "19px" }}
            >
              Charts
            </Typography>
            <Item
              title={
                <Typography sx={{ fontSize: "16px", fontWeight: "bolder",  color: "black" }}>
                  Bar Chart
                </Typography>
              }
              to="/bar"
              icon={<BarChartOutlinedIcon sx ={{ color:"black" ,backgroundColor:"white", border:"none"}} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title= {
                <Typography sx={{ fontSize: "16px", fontWeight: "bolder",  color: "black" }}>
                  Pie Char
                </Typography>
              }
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon  sx ={{ color:"bolder" ,backgroundColor:"white", border:"none"}}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
  title={
    <Typography sx={{ fontSize: "16px", fontWeight: "bolder",  color: "black" }}>
      Line Chart
    </Typography>
  }
  to="/line"
  icon={<TimelineOutlinedIcon sx ={{ color:"black" ,backgroundColor:"white", border:"none"}} />}
  selected={selected}
  setSelected={setSelected}
/>
               
          
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
