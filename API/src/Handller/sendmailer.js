const nodemailer = require('nodemailer');
const Mailsend=(Link)=>{

    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }
    
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: account.user, // generated ethereal user
                pass: account.pass  // generated ethereal password
            }
        });
    
        // Define email options
        let mailOptions = {
            from: '"Nodemailer Test" <no-reply@example.com>', // Sender address
            to: 'rinkynateriya19@gmail.com', // Recipient address 

            subject: 'Hello from Nodemailer', // Subject line
            text: 'Hello world!', // Plain text body
            html: Link // HTML body
        };
    
        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log('Error occurred: ' + error.message);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    });




}
module.exports=Mailsend;