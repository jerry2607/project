import express from "express";
const app=express();
const PORT=process.env.PORT ||3000
const data=[
    {
        "email": "milan.ankunding@email.com",
        "password": "WJr28eEn5y"
    },
    {
        "email": "thad.stehr@email.com",
        "password": "2OIupCY9Vj"
    },
    {
        "email": "berry.nienow@email.com",
        "password": "X5jxQBOkTr"
    },
    {
        "email": "damian.grant@email.com",
        "password": "zSM3AuVGot"
    },
    {
        "email": "rufus.kertzmann@email.com",
        "password": "3D7O9mivAE"
    },
    {
        "email": "micah.mcglynn@email.com",
        "password": "heHyT4A319"
    },
    {
        "email": "jonna.windler@email.com",
        "password": "1HdGaOujPY"
    },
    {
        "email": "courtney.rowe@email.com",
        "password": "WBmKaptVN3"
    },
    {
        "email": "daniel.maggio@email.com",
        "password": "QABC13jz8E"
    },
    {
        "email": "mariano.corwin@email.com",
        "password": "bfqYAlPOpI"
    }
]
app.post("/login",async(req,res)=>{
    const email=req.body.email;
    const pass=req.body.password;
    if((!email)||(!pass)){
        return res.status(401).send({message:"enter the necessary details"});
    }



})
app.use(express.json());