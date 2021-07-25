import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAUT2u4OiE2PvAoPicpU3cg1W_2bAXQows",
    authDomain: "autos-regueira.firebaseapp.com",
    projectId: "autos-regueira",
    storageBucket: "autos-regueira.appspot.com",
    messagingSenderId: "33862914107",
    appId: "1:33862914107:web:0975fe4f79d92ceee08c1e"
}

const app = firebase.initializeApp(firebaseConfig)
  
export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)      
}