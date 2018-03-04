const mongooose=require('mongoose');


const ActivatoinSchema=mongooose.Schema({
    Uname:{
        type:String,
        required: true,
        unique: true
    },
    activated:{
        type: Boolean,
        required:true,
        default: false
    }

});

const Activation = module.exports= mongooose.model('Activation',ActivatoinSchema);  