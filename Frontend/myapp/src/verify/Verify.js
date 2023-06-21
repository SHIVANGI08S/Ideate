import React , {useState} from "react";
import {Box, FormLabel, Typography,TextField,Button} from "@mui/material";

const Verify =()=> {
    const[isSignup,setisSignup] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    };
const [inputs,setinputs] = useState({Name:"",email:"",password:""});
const handleChange =(e) =>{
  setinputs((prevState)=>({
    ...prevState,
    [e.target.name] : e.target.value,
}));
}
    return (<Box width ="50%" borderRadius ={10} boxShadow ={"5px 5px 10px lightblue"} margin ="auto" marginTop={3}>
   <form onSubmit={handleSubmit}>
    <Box display ="flex" flexDirection={"column"} width ="60%" padding ={5} margin ="auto">
        <Typography variant ="h4" textAlign ="center" padding ={0.5}>{isSignup?"SignUp":"Login"} </Typography>
      { isSignup && (<> <FormLabel>Name</FormLabel>
        <TextField 
        onChange={handleChange}
          value={inputs.Name}
          name ="Name"
        margin ="normal"/></>)}
        <FormLabel>Email</FormLabel>
        <TextField 
         onChange={handleChange}
        value={inputs.email}
        name ="email"
        margin ="normal"/>
        <FormLabel>Password</FormLabel>
        <TextField 
         onChange={handleChange}
          value={inputs.password}
          name ="password"
          required
          margin ="normal"/>
        <Button sx ={{mt:2,borderRadius:10 }} type ="submit" variant ="contained">{isSignup?"SignUp":"Login"}</Button>
        <Button onClick={()=>setisSignup(!isSignup)} sx ={{mt:2,borderRadius:10 }} type ="submit" variant ="outlined">{isSignup?"Login":"SignUp"}</Button>
    </Box>
</form>

    </Box>
    );

};

export default Verify;