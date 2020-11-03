const express = require("express")
const router= express.Router()

router.get('/' , (req,res)=>
{
    res.send('patronus backend')
})
// router.get('/dashboard' , ensureAuth , (req,res)=>{
//     res.send(`Hello ${req.user.firstName}`)
// })

module.exports = router