import { auth } from './constants';

export default {
    signup: (email: string, pw: string): void => {
        auth.createUserWithEmailAndPassword(email, pw).then((cred) => {
            console.log(`Signed up: ${cred}`);
        });
    },

    login: (email: string, pw: string): void => {
        auth.signInWithEmailAndPassword(email, pw).then((cred) => {
            console.log('logged in');
        });
    },

    logout: (): void => {
        auth.signOut();
    },

    authListener: (): void => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log(`user logged in: ${user}`);
            } else {
                ('user logged out');
            }
        });
    },
};
