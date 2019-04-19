const db=require('../dbconnection');

const productSchema=db.Schema({
    _id:{type:String,required:true},
    pro_name:{type:String,required:true},
    pro_price:{type:Number,required:true}
});

module.exports=db.model('Product',productSchema);