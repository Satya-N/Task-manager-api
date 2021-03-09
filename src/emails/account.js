const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const welcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'satyaprakashn7@gmail.com',
        subject: 'Thanks For Joining With Us',
        text: `Welcome To The App,${name}.`
    })
}

const cancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'satyaprakashn7@gmail.com',
        subject: 'We will see you again',
        text: `How can we Improve???`
    })
}




module.exports = {
    welcomeEmail,
    cancelationEmail
}