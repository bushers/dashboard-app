import { iLoginState } from './AuthContext';
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

    authListener: (callback: (loginState: iLoginState) => void): void => {
        auth.onAuthStateChanged((fbUser) => {
            if (fbUser) {
                console.log(`user logged in: ${fbUser}`);
                callback({
                    status: 'success',
                    error: null,
                    user: fbUser,
                });
            } else {
                ('user logged out');
                callback({
                    status: 'success',
                    error: null,
                    user: null,
                });
            }
        });
    },
};
