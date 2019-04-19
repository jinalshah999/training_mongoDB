const db=require('../dbconnection');

const userSchema=db.Schema({
    _id:{type:String,required:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    gender:{type:String}
});

module.exports=db.model('User',userSchema);