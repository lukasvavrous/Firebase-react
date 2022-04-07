import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyColMqA6mZ4MM_Z-84oUDkjxtrPjUGEZkc",
    authDomain: "dockfire-b8043.firebaseapp.com",
    databaseURL: "https://dockfire-b8043-default-rtdb.firebaseio.com",
    projectId: "dockfire-b8043",
    storageBucket: "dockfire-b8043.appspot.com",
    messagingSenderId: "483773964660",
    appId: "1:483773964660:web:0cdc3648a40cfd4b21cc21",
    measurementId: "G-1V3H6KVPMN"
}


const localConfig = {
    apiKey: "AIzaSyColMqA6mZ4MM_Z-84oUDkjxtrPjUGEZkc",
    authDomain: "dockfire-b8043.firebaseapp.com",
    databaseURL: "localhost:9000",
    projectId: "dockfire-b8043",
    storageBucket: "dockfire-b8043.appspot.com",
    messagingSenderId: "483773964660",
    appId: "1:483773964660:web:0cdc3648a40cfd4b21cc21",
    measurementId: "G-1V3H6KVPMN"
}

const instance = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export default instance;

export const firebaseAuth = instance.auth();
export const firestore = instance.firestore()
