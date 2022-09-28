const express = require('express');


//@route  GET api/profile/test
 //@desc   Tests profile route
 //@access Public
const router = express.Router();

router.get('/test', (req,res)=>res.json({
    msg:"I am Profile page",
    Name: "amar",
    Lastname: "Chauhan"
}))

module.exports=router