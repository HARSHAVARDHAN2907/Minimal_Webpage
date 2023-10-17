import express from "express";
import { fileURLToPath } from "url";
import path from "path";


const app=express();

const port=3000;


app.get("/home",(req,res)=>{
    const filename=fileURLToPath(import.meta.url);
    console.log(filename);
    const dirpath=path.dirname(filename);
    const resname=path.join(dirpath,"home.html");
    res.sendFile(resname);
})
app.get("/profile",(req,res)=>{
    const filename=fileURLToPath(import.meta.url);
    const dirpath=path.dirname(filename);
    const resname=path.join(dirpath,"profile.html");
    res.sendFile(resname);
})
app.get("/services",(req,res)=>{
    const filename=fileURLToPath(import.meta.url);
    console.log(filename);
    const dirpath=path.dirname(filename);
    const resname=path.join(dirpath,"services.html");
    res.sendFile(resname);
})
app.get("/contact",(req,res)=>{
    const filename=fileURLToPath(import.meta.url);
    console.log(filename);
    const dirpath=path.dirname(filename);
    const resname=path.join(dirpath,"contact.html");
    res.sendFile(resname);
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});