import React, { useState } from "react";
import {AppBar,Tab,Tabs,Toolbar} from "@mui/material";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Link } from 'react-router-dom';
import {Typography} from '@mui/material';
const linksArr = ["home","ideas","verify"];
const Header = () =>{

    return (
    <AppBar sx={{position:"sticky"}}>
    <Typography sx={{position:"absolute" ,top:"18px",left:"60px",fontSize:"20px",fontFamily:"cursive"}}>Ideate</Typography>
        <Toolbar>
            <TipsAndUpdatesIcon/>
            <Tabs sx={{ ml: "auto"}}>
              {linksArr.map((link)=><Tab 
              LinkComponent={Link} 
              to={`/${link==="home" ? "" : link}`}
              sx={{color:"white" , textDecoration:"none", ":hover":{
                textDecoration:"underline",
                textUnderlineOffset:"18px",
              }}} key ={link} label= {link}/>)}
            </Tabs>
        </Toolbar>
    </AppBar>
    );
};
export default Header; 