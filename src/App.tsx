import * as React from 'react';

import AppContext from './AppContext';
import Layout from './components/Layout';

interface Props {}

const App: React.FC<Props> = () => {
    const [appState, setAppState] = React.useState('test context');

    const providerState = React.useMemo(() => ({ appState, setAppState }), [appState, setAppState]);

    return (
        <AppContext.Provider value={providerState}>
            <Layout>Yep</Layout>
        </AppContext.Provider>
    );
};

export default App;
