
const express=require('express');
const router=express.Router();
const faker=require('faker');

const Activation=require('../models/activation');
const Registration=require('../models/registration');

router.get('/',(req,res,next)=>{
    res.render('index');
});

router.get('/register/',(req,res,next)=>{
    res.render('register');
});

router.get('/api/v1/Myapp/activate=:id&uname=:name',(req,res)=>{
    console.log("sad"+req.params.id+req.params.name);
    
    if(!req.params.id||!req.params.name)
       res.render('error');
       
    Registration 
    .findOne({'Uname':req.params.name})
    .exec((err,person)=>{
        if(err) return next('error')
        if(person==undefined){console.log('error',person); res.redirect('/'); return next('error')}
        
        res.render('success',{
            Uname:req.params.name
        });
        var rec=new Activation();
        Activation.where({'Uname':req.params.name}).update({'activated':true}).exec((err,writeOp)=>{
            if(err) return next('error');
        });

    })
        
});

router.get('/api/v1/MyApp/fake-data',(req,res,next)=>{
    for(var i=0;i<10;i++){
        var reg=new Registration();
        reg.Uname=faker.internet.userName();
        reg.Password=faker.internet.password();
        reg.Email=faker.internet.email();
        reg.save((err)=>{
            if(err) console.log(err);
        })
        
    }
    res.redirect('/');
});

router.get('/template',(req,res,next)=>{
    res.render('template',{
        name:'srujan',
        token:'http://localhost:3000/api/v1/Myapp/activate=22&uname=Anya.Monahan'
    });
});
router.post('/api/v1/MyApp/addDetails',(req,res,next)=>{
    let reg=new Registration({
        Uname:req.body.Username,
        Password:req.body.password,
        Email:req.body.email
    });

    let Act=new Activation({
        Uname:req.body.Username,
        activated: 'false'
    });
   
    reg.save(err=>{
        if(err) res.status(500).send(err);
       if(!err) Act.save(e=>{
            if(e) res.status(500).send(e);
            if(!e) res.send('success');
        })
    })

    
});

router.get('*',(req,res,next)=>{
    res.render('error');
});
module.exports = router