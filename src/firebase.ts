import * as firebase from 'firebase';

import { firebaseConfig } from './keys';

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
