
import firebase from 'firebase'

let config = {  
    apiKey: "xxxxxxxxx",
    authDomain: "xxxxxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxxx.firebaseio.com",
    projectId: "xxxxxxxx",
    storageBucket: "xxxxxxxx.appspot.com",
    messagingSenderId: "14988806777777"
}

let app = firebase.initializeApp(config)
let db = app.database()
export default db
