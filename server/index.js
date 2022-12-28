const express = require("express");
const app = express();
const http = require("http");
const cors= require("cors");
//step4.1
const {Server} = require("socket.io")

app.use(cors());



const server= http.createServer(app);

//step4.2
const io= new Server(server,{
     cors:{
          orogin: "http://locolhost:3000",
          methods:["GET","POST"]
     },
});

//step4.3
io.on("connection",(socket)=>{
     console.log(socket.id);

     //for disconnecting the server

     socket.on("disconnect", ()=>{
          console.log("User disconnected", socket.id);
     });
});

// app.listen(3001||process.env.PORT,()=>{
//      console.log('server running on '+(3001||process.env.PORT))
// })

server.listen(process.env.PORT || 3001, ()=>{
     console.log("server running on " + (process.env.PORT || 3001))
});