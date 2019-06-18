import firebase from 'firebase'

const config = {
    // Your web app's Firebase configuration
    apiKey: "AIzaSyDWBCWK56V_rMn2_Yq4b2iKZ1aU_gB6j9Y",
    authDomain: "react-web-f2c7c.firebaseapp.com",
    databaseURL: "https://react-web-f2c7c.firebaseio.com",
    projectId: "react-web-f2c7c",
    storageBucket: "",
    messagingSenderId: "430242493949",
    appId: "1:430242493949:web:1070251cd9a73fc0"
};

// Initialize Firebase
const fire = firebase.initializeApp(config)

export default fire