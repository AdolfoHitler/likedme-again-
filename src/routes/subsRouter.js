
const { Router } = require("express");
const router = Router();

router.post('/api/v1/add/subscriptions',(req,res) => 
{
    const Subs = require('../models/subsModel') 
    //let pass = req.body.pass
    const subs = new Subs(
    {
        typeSubs: req.body.type,
        quantitySubs: req.body.quantity,
        price: req.body.price,        
    })
    subs.save((err,subsDB) =>{
        if(err){
            return res.status(400).json({
                status: false,
                err
            })
        }
        res.json({
            status:true,
            subsDB
        })
    })
})
module.exports = router;