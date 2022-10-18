const express=require("express");
const server=require("..//Controllers/data")


const datarouter=express.Router();

datarouter.route("/home")
.get(server.apicontroller);

module.exports=datarouter;