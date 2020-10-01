import * as React from 'react';

import { useAuthState } from '../AuthContext';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
    const { user } = useAuthState();
    console.log(user);
    const { username } = user;

    return (
        <div className="layout">
            <h1>{username}</h1>
            {children}
        </div>
    );
};

export default Layout;
