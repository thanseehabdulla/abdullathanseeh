import * as firebase from "firebase";


// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    projectId: "test-3d378",
    apiKey: "AIzaSyDidIQ_BW3MR_Q1Btxl6eKxsMXfne-RJCw",
    authDomain: "test-3d378.firebaseapp.com",
    databaseURL: "https://test-3d378.firebaseio.com",
    storageBucket: "gs://test-3d378.appspot.com",
};
firebase.initializeApp(config);

export const firebaseStorage = firebase.storage;
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
const dbmails = firestore.collection("mails");


class FirebaseHelper {


    addMail(data) {
        console.log("Reached firestore")
        console.log(data);
        var formdetails =
            {
                name: data.data.name,
                email: data.data.email,
                message: data.data.message

            };
        dbmails.doc().set(formdetails)
            .then(function () {
                console.log("form added");
            })
            .catch(function (err) {
                console.log(err);
            })
    }


}

export default new FirebaseHelper();