const mongooose=require('mongoose');


const RegistrationSchema=mongooose.Schema({
    Uname:{
        type:String,
        required: true,
        unique: true
    },
    Password:{
        type: String,
        required:true,
    },
    Email:{
        type:String,
        require:true,
        default: "",
        unique: true
    },
    Activated:{
        type: Boolean,
        default: false
    }

});

const Registration = module.exports= mongooose.model('Registration',RegistrationSchema);  