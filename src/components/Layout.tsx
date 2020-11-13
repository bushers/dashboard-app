import * as React from 'react';

import { useAuthState } from '../AuthContext';
import Login from './Login';
import Signup from './Signup';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
    const { user } = useAuthState();
    console.log(user);

    return (
        <div className="layout">
            {user ? (
                <h1>{`Welcome ${user.email}`}</h1>
            ) : (
                <div>
                    <Signup />
                    <Login />
                </div>
            )}

            {children}
        </div>
    );
};

export default Layout;
