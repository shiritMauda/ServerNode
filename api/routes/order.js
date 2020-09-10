const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/',(req,res,next)=>{
    res.status(200).json({
        messeage:'Orders were fetched'
    });
});

router.post('/',(req,res,next)=>{
    res.status(201).json({
        messeage:'Orders were created'
    });
});

router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({
        messeage:'Order seleted',
        orderId: req.params.orderId
    });
});

router.get('/:orderId',(req,res,next)=>{
    res.status(200).json({
        messeage:'Orders details',
        orderId: req.params.orderId
    });
});

module.exports = router;