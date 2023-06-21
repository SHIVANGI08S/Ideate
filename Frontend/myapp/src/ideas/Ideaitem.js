import React from "react";
import {Card, CardHeader,IconButton,Avatar,CardContent,Typography, CardActions} from "@mui/material";
import {Box} from "@mui/system"
import AddCommentIcon from '@mui/icons-material/AddComment';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
const Ideaitem =({title,description,image,location,date,id})=> {
    return (
        <Card sx={{ width: "50%", height:"auto", margin:1,padding:1,display:"flex",flexDirection:"column",boxShadow:"5px 5px 10px lightblue" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">{<AddCommentIcon/>}
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={location}
        header={location}
        subheader ={date}
      />
      <img
        height="194"
        src={image}
        alt={title}
      />
      <CardContent>
      <Typography paddingBottom={1}  variant="h6" color="black">
          {title}
        </Typography>
        <hr/>
        <Box paddingTop ={1} display ="flex" justifyContent={"space-between"}>
        <Typography width ="160px" fontWeight={"bold"} variant="div">Arya Shashwat Singh</Typography>
        <Typography variant="body2" color="black" paddingLeft={1}>
        {description}
        </Typography>
        </Box>
      </CardContent>
      <CardActions sx ={{marginLeft:"auto"}}>
        <IconButton sx={{color:"blue"}}><EditNoteIcon/></IconButton>
        <IconButton sx={{color:"red"}}><DeleteIcon/></IconButton>
      </CardActions>
    </Card>
    );

}

export default Ideaitem;