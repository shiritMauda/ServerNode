const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/',(req,res,next)=>{
res.status(200).json({
message: 'handaling GET requests to /products'
});
});
router.post('/',(req,res,next)=>{
res.status(200).json({
message: 'handaling POST requests to /products'
});
});

router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            meseeage: 'You discovered the special ID',
            id:id
        });

    }else{
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        mwssage: 'Updated product!'
    });
})
router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        mwssage: 'Deleted product!'
    });
})

module.exports = router;