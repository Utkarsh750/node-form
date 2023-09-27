// import http from "http"

// // import gfName from "./random.js"
// // const gfName = require("./random") // import kie h isko ramdom.js file se
// // import { gfName1 , gfName2 } from "./random.js"  import more then 2 variables
// import * as myObj from "./random.js"  // import as a object in server
// import { randomPercent } from "./random.js"

// console.log(myObj)

// console.log(myObj.randomPercent())

// const server = http.createServer((req , res) => {
//     // console.log(req.url)
//     if(req.url === "/about"){
//         res.end(`<h1>This is ${randomPercent()} </h1>`)
//     }
//     else if(req.url === "/home"){
//         res.end("<h1>This is Home page</h1>")
//     }
//     else if(req.url === "/contact"){
//         res.end("<h1>This is contact page</h1>")
//     }
//     else{
//         res.end("<h1>Page not found</h1>")
//     }
// })

// server.listen(5000 , () => {
//     console.log("server is working")
// })


import express from "express";
import path from "path"
import mongoose from "mongoose";

mongoose.connect("127.0.0.1:27017")

const server = express();
server.use(express.static(path.join(path.resolve(), "public")));
server.use(express.urlencoded({ extended: true }))  // print data from the server





// server.get("/" , (req, res) =>{    // we can send somthing on our server using this express syntex
//     // res.send("Hii This is a new server")
//     // res.sendStatus(500)
//     res.json({
//         name: "Utkarsh",
//         lastname: "Sharma",
//         age : 20,

//         employee : "Keshav Gupta",
//         company : "deel.com",
//         salary : 10000000,
//         location : "California",
//         experience : "100 years"

//     })
// })

// // ----------------------- Routing in ExpressJs --------------------------
// server.get("/users", (req , res) => {
//     res.json({
//         message : "Get all the users"
//     })
// })

// server.get("/users/:id" , (req , res) => {
//     res.json({
//        message :` Get the id details ${req.params.id}`
//     })
// })
// server.post("/users/" , (req , res) => {
//     message : `Create new user`
// })

// server.put("/users/:id" , (req , res) => {
//     message : `Update user id with ${req.params.id}`
// })

// server.delete("/users/:id" , (req , res) =>{
//     message : `Delete the user id with ${req.params.id}`
// })

const users =[]
server.set("view engine" , "ejs")

server.get("/" , (req , res) => {
    res.render("index", { name: "Utkarsh"})  // to render html/ejs element
})

server.get("/add" , (req , res) => {
    res.send("nice")  // to render html/ejs element
})
server.get("/success" , (req , res) => {
    res.render("success")  // this is routing to success page
})

server.post("/contact" , (req , res) => {

    users.push({ username: req.body.name , email: req.body.email})

    res.redirect("/success")
})

server.get("/users" , (req , res) => {
    res.json({
        users,     // this will provide the data given to the form input and will store as a array object
    })
})
server.listen(4000 , () =>{
    console.log("server is running")
})

