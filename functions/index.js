const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp()
var bucket = admin.storage().bucket();

var rp = require('request-promise');

const file = bucket.file('records.json');

// const data = async () => {
//     await fetch('https://api.airtable.com/v0/appd9CZuwuY4msQ9I/Live%20Data?api_key=key3ypYZm0iZ5DBah')
//         .then(response => response.json())
//         .then(data =>  {
          
//             return;
//         });
// }

// data();




exports.saveCallToAPI = functions.https.onRequest((req, res) => {
    var options = {
        uri: 'https://api.airtable.com/v0/appd9CZuwuY4msQ9I/Live%20Data?api_key=key3ypYZm0iZ5DBah',
        json: true // Automatically parses the JSON string in the response
    };
    console.log('hhh');
    rp(options)
        .then(data => {
            console.log(data);
            file.save(JSON.stringify(data), {
                metadata: {
                    contentType: 'application/json',
                    cacheControl: 'no-cache',
                    metadata: {
                        custom: 'metadata',
                        cacheControl: 'no-cache'
                    }
                }
            });
            res.send('Done');
            return true;
        })
        .catch(error => {
            res.status(500).send(JSON.stringify(error));
        });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//     console.log('Helloooo');
//     console.log(bucket);
//     response.send(
//        "ffff"
//     );
// });
