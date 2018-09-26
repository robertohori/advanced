
var express = require("express");

var appRouter = express.Router();
var appController = require('../../controllers/app/appController');
appRouter.get('/',(req,res)=>{appController.get(req,res)});
module.exports = appRouter;