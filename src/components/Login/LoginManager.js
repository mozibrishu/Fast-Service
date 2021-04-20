import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            console.log(res.user);
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                isSignedIn: true,
                displayName: displayName,
                email: email,
                image: photoURL,
                success: true,
            };
            return signedInUser;
        })
        .catch(error => {
            const newUserInfo = {};
            // sign in failed error message
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        })
}

