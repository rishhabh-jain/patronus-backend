const express = require("express")
const User = require('../models/User')
const router= express.Router()

router.get('/' , (req,res)=>
{
    res.send('patronus backend')
})

router.put('/updateuser' , async (req,res)=>
{
    try { 
        await User.update({ _id : req.body.user}, {"$set" : {"number" : req.body.number}})
          res.send("successfully updated the user number ")
        } catch (err) {
          console.error(err)
        //   res.render('error/500')
        }
})
// router.get('/dashboard' , ensureAuth , (req,res)=>{
//     res.send(`Hello ${req.user.firstName}`)
// })

module.exports = router