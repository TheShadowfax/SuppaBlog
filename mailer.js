var nodemailer = require('nodemailer');
var EmailTemplate = require('email-templates').EmailTemplate;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'srujank01@gmail.com',
    pass: 'srujank@01'
  }
});

var mailOptions = {
  from: 'srujank01@gmail.com',
  to: 'srujank01@gamil.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  
};

var sendMaillink=transporter.templateSender({
n
})


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 