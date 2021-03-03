// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp()
// Node fetch initialisation
const fetch = require('node-fetch');
const cors = require('cors')({origin: true});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.nodeFetch = functions.https.onRequest((req, res) => {
  cors(req, res, () => {})
  fetch('https://www.revolut.com/help')
    .then(data => data.text())
    .then(text => res.status(200).send({strHtml: text}))
    .catch(err => console.log('ERROR:', err))
});


