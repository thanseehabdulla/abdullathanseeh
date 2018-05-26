

const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const mkdirp = require(`mkdirp-promise`);
const gcs = require(`@google-cloud/storage`)({keyFilename: 'service-account.json'});
const spawn = require(`child-process-promise`).spawn;
const fs = require('fs');
const os = require('os');
const path = require('path');
var _ = require('underscore');
const Razorpay = require('razorpay');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const cors = require('cors')({origin: true});
const Busboy = require('busboy');
var moment = require("moment");
var rp = require('request-promise');
var inspect = require('util').inspect;
var fx = require('money');
fx.base="USD";
//initialize the firestore
const admin = require('firebase-admin');


const nodemailer = require('nodemailer');
var {OAuth2Client} = require('google-auth-library');

var oauth2Client = new OAuth2Client("63001147826-i1r498nsf421k28sujjtmk0gmj5a6ui2.apps.googleusercontent.com",
    "xIOt8CTcsF3RouLTI-D-yD5a", "https://developers.google.com/oauthplayground");
oauth2Client.credentials = {
    "access_token": "ya29.GlvHBTWkmZ4OkeDa4IGZIOFJcrPcWa_2j_Koj_96foeBwKs51onPdVwfE5HqVyJq621WOtrNhYVVUd2c7LUVHMcnK9GOdXAmA_n7wCP43CF70MP-1KCNR_Dvb6-q",
    "token_type": "Bearer",
    "refresh_token": "1/m7MJMrDZZ_k0zpu0QWCEP_Q8YShweRSKZRowtDSW6Q4",
    "expiry_date": '1519208582000'
};

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'thanseehabdulla@gmail.com',
        clientId: '63001147826-i1r498nsf421k28sujjtmk0gmj5a6ui2.apps.googleusercontent.com',
        clientSecret: 'xIOt8CTcsF3RouLTI-D-yD5a',
        refreshToken: '1/m7MJMrDZZ_k0zpu0QWCEP_Q8YShweRSKZRowtDSW6Q4',
        accessToken: 'ya29.GlvHBTWkmZ4OkeDa4IGZIOFJcrPcWa_2j_Koj_96foeBwKs51onPdVwfE5HqVyJq621WOtrNhYVVUd2c7LUVHMcnK9GOdXAmA_n7wCP43CF70MP-1KCNR_Dvb6-q',
        expires: 3600
    }
});
transporter.on('token', token => {
    console.log('A new access token was generated');
    console.log('User: %s', token.user);
    console.log('Access Token: %s', token.accessToken);
    console.log('Expires: %s', new Date(token.expires));
});



function sendMail(to,subject,content){
    const mailOptions = {
        from: `thanseehabdulla@gmail.com`,
        to: to
    };

    // The user unsubscribed to the newsletter.
    mailOptions.subject = subject;
    mailOptions.text = content;
    transporter.sendMail(mailOptions).then(() => {
        console.log('email sent to:', to);
        return (0)
    }).catch((err)=>{
        console.log('email sent error :', err);
        return (0)
    });
}


admin.initializeApp(functions.config().firebase);

var db = admin.firestore();



exports.onMailCreated = functions.firestore.document('mails/{doc}')
    .onCreate((change, context) => {
        // Do something when a new mail is created
        console.log("executed mail service");
     sendMail("thanseehabdulla@gmail.com","contact us","content")


    });








