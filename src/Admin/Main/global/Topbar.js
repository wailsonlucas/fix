import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
//import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import "/Users/macbook/my-app/src/Admin/admin.css"
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        
      </Box>

      {/* ICONS */}
      <Box display="flex">
      <IconButton>
            <PersonOutlinedIcon style={{ color: "black" }} />
        </IconButton> 
        <IconButton>
          <SettingsOutlinedIcon  style={{ color: "black" }}/>
        </IconButton>
       
    
      </Box>
    </Box>
  );
};

export default Topbar;