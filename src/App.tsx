import * as React from 'react';

import Layout from './components/Layout';
import { AuthProvider } from './AuthContext';
import fbAuth from './fbAuth';
import { auth } from './constants';

interface Props {}

const App: React.FC<Props> = () => {
    console.log(auth);
    console.log(fbAuth);

    return (
        <AuthProvider>
            <Layout>Layout</Layout>
        </AuthProvider>
    );
};

export default App;
