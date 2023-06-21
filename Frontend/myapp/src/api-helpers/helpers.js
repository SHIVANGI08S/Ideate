import axios from "axios";
export const getAllPosts = async()=>{
  const  res = await axios.get("/posts");
  if(res.status!==200){
    console.log("Some Error Occured")
  }
  const data = res.data;
  return data;

};

export const sendAuthRequest = async(signup,data)=>{
  const res = await axios.post(`/${signup?"signup":"login"}/`,{
    name:data.name ? data.name :"",
    email:data.email,
    password:data.password

  }).catch((err)=>console.log(err));
if(res.status !== 200 || res.status !== 201){
  return console.log("Unable to Autenticate");
}
const resData = await res.data;
return resData;
};