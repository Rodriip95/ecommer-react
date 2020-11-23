import * as firebase from 'firebase/app';
import 'firebase/firestore';
const app = firebase.initializeApp({
    apiKey: "AIzaSyDUCSiPlemP-7bRMshG-uvAgzB5DVH5Lg4",
    authDomain: "ecommercereact-3a9a0.firebaseapp.com",
    databaseURL: "https://ecommercereact-3a9a0.firebaseio.com",
    projectId: "ecommercereact-3a9a0",
    storageBucket: "ecommercereact-3a9a0.appspot.com",
    messagingSenderId: "676286231511",
    appId: "1:676286231511:web:60b3cb42b621dea2165192"
});
export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}
// Export other firebase integrations

// export const db = app.firestore()

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FS_API_KEY,
//     authDomain: process.env.REACT_APP_FS_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FS_DATABASE_URL,
//     projectId: process.env.REACT_APP_FS_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FS_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FS_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FS_APP_ID
//   };