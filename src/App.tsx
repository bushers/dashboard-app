import * as React from 'react';

import Layout from './components/Layout';
import { AuthProvider } from './AuthContext';

interface Props {}

const App: React.FC<Props> = () => {
    return (
        <AuthProvider>
            <Layout>Layout</Layout>
        </AuthProvider>
    );
};

export default App;
