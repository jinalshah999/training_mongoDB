var express=require('express');
var router=express.Router();
var product=require('../Models/product_model');

router.post('/',function(req,res,next){
    const prod=new product({
        _id:req.body._id,
        pro_name:req.body.pro_name,
        pro_price:req.body.pro_price
    });
    prod.save(function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

router.get('/',function(req,res,next){
    product.find(function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
router.get('/:id',function(req,res,next){
    product.findById({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
router.delete('/:id',function(req,res,next){
    product.deleteOne({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
router.put('/:id',function(req,res,next){
    product.updateOne({_id:req.params.id},req.body,function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
module.exports=router;