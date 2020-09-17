import * as React from 'react';
import AppContext from '../AppContext';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
    const { appState, setAppState } = React.useContext(AppContext);

    return (
        <div className="layout">
            <h1>{appState}</h1>
            <button onClick={() => setAppState('New state')}>Click</button>
            {children}
        </div>
    );
};

export default Layout;
