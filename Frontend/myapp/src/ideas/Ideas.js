import React , {useEffect, useState} from "react";
import {Box} from "@mui/material";
import Ideaitem from "./Ideaitem";
import { getAllPosts } from "../api-helpers/helpers";
const Ideas =()=> {
    const [posts,setPosts] = useState()
    useEffect(() => {
        getAllPosts().then((data)=>setPosts(data?.posts)).catch(err=>console.log(err))
    } , []);
    return (
        <Box display="flex" flexDirection ={"column"} padding={3} justifyContent ="center" alignItems={"center"}>
        
        {" "}
        { posts && posts.map((item,index)=> 
        (<Ideaitem date ={new Date(`${item.date}`).toLocaleDateString()} 
        description ={item.description}
        image ={item.image}
        id = {item.id}
        location ={item.location}
        title = {item.title}
        key ={index}/>))};
        </Box>
    );

}

export default Ideas;