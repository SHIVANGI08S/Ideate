import React from "react";
import {Box} from "@mui/system";
import {Typography, Button} from '@mui/material';
import {Link} from "react-router-dom";
const Home =()=> {
    return <Box position={"relative"} width="100%" height="90vh"sx={{backgroundColor:"lightblue"}} >
    <img src="/homeima.jpg" alt="idea" width={"100%"} height="80%"></img>
    <Typography
        fontFamily={"Dancing Script,cursive"}
        variant="h3"
        fontWeight="bold"
        textAlign={"center"}
        sx={{
          position: "absolute",
          top: "480px",
          left:"250px",
          color: "darkblue",
        }}
      >
        The best way to predict the future is to create it.
      </Typography>
      <Box width="100%" height ="50%" display={'flex'} flexDirection={"column"} >
      <Box   sx ={{position:"absolute" ,top:"650px", left:"215px"}}>
      <img src="/success.jpg" alt="idea" height="500px" ></img>
      </Box>
        <Typography textAlign={"center"} variant="h4" padding={4} fontFamily={"quicksand"} sx={{position:"absolute", top:"1190px", left:"250px"}}>Share your innovative ideas with the world</Typography>
      <Box margin ="auto">
      <Button variant ="outlined" sx={{position:"absolute", top:"1280px", left:"480px"}}>Share your idea</Button>
      <Button LinkComponent ={Link} to ="/ideas" variant="contained" sx={{position:"absolute", top:"1280px", left:"680px"}}>View Ideas</Button>
      </Box>
      </Box>
      </Box>
}

export default Home;