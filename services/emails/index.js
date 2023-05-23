const nodemailer = require('nodemailer');
const { gEmail,gPassword } = require('../../config/config');


class Emails {
    constructor(){
    }
    async sendMail(infoMail) {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: gEmail,
              pass: gPassword
            },
          });
          // send mail with defined transport object
           await transporter.sendMail(infoMail);
            return {
            message:'email has been sent'
          }
      }
}

module.exports= Emails
