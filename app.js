const express = require("express");
const app = express();
const ExpressError = require("./expressError");
const {frequencyCounter,convertNumsArray,getMean,getMedian,getMode} = require("./calculator")


app.use(express.json());


app.get("/mean", function (req,res,next){ 
    if(!req.query.nums) {
        throw new ExpressError("A query string of comma seperated numbers is required", 400);
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertNumsArray(numsAsStrings);
    if (nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: getMean(nums)
    }
    return res.send(result);
    });


    
    app.get("/median", function (req,res,next){
        if(!req.query.nums) {
            throw new ExpressError("A query string of comma seperated numbers is required", 400);
        }
        let numsAsStrings = req.query.nums.split(',');
        let nums = convertNumsArray(numsAsStrings);
        if (nums instanceof Error){
            throw new ExpressError(nums.message);
        }
    
        let result = {
            operation: "median",
            result: getMedian(nums)
        }
        return res.send(result);
    
    })
    
    app.get("/mode", function (req,res,next){

        if(!req.query.nums) {
            throw new ExpressError("A query string of comma seperated numbers is required", 400);
        }
        let numsAsStrings = req.query.nums.split(',');
        let nums = convertNumsArray(numsAsStrings);
        if (nums instanceof Error){
            throw new ExpressError(nums.message);
        }
    
        let result = {
            operation: "mode",
            result: getMode(nums)
        }
        return res.send(result);
    
    })
    

app.use(function(req, res, next) {
    const err = new ExpressError("Not Found", 404);
    return next(err)
  });
  
  
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
  
    return res.json({
      error: err,
      message : err.message
    }); 
  });


module.exports = app;