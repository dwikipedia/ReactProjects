import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

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

firebase.initializeApp(config)
firebase.firestore()

export default firebase