var express=require('express');
var router=express.Router();
var user=require('../Models/user_model');

// router.post('/',function(req,res,next){
//     const users=new user({
//         _id:req.body._id,
//         firstName:req.body.firstName,
//         lastName:req.body.lastName,
//         gender:req.body.gender
//     });
//     users.save(function(err,result){
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.json(result);
//         }
//     });
// });

router.post('/',function(req,res,next){
    user.insertMany(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/',function(req,res,next){
    user.find(function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
router.get('/:id',function(req,res,next){
    user.findById({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
router.delete('/:id',function(req,res,next){
    user.deleteOne({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
router.put('/:id',function(req,res,next){
    user.updateOne({_id:req.params.id},req.body,function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
module.exports=router;