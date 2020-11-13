import * as React from 'react';

import fbAuth from '../fbAuth';

interface Props {}

const Login: React.FC<Props> = ({ children }) => {
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fbAuth.login(username, password);
    };

    return (
        <div className="login">
            <h2>Please log in</h2>
            <form onSubmit={submit} id="login">
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" form="login">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
