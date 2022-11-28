const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Register=require("./registerschema.js")
const port=3000;
app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())
mongoose.connect("mongodb+srv://Manikanta:Manikanta44@cluster0.h5dgys4.mongodb.net/firstdb?retryWrites=true&w=majority")
	.then(()=>{
		console.log("connection established")
	})
	.catch((err)=>{
		console.log(err)
	})
app.get("/",(req,res)=>{
	res.send("this is demo route")
})
app.post("/register",(req,res)=>{
	//const {email,passcode}=req.body;
	const email="sai44@gmail.com",passcode="4444"
	const newFrontendUser=new Register({
		username:email,
		password:passcode
	})
	newFrontendUser.save()
})
app.listen(port,()=>console.log("server is running on port",port))