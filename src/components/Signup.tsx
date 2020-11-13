import * as React from 'react';

import fbAuth from '../fbAuth';

interface Props {}

const Signup: React.FC<Props> = ({ children }) => {
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fbAuth.signup(username, password);
    };

    return (
        <div className="signup">
            <h2>Please Sign up</h2>
            <form onSubmit={submit} id="signup">
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
                <button type="submit" form="signup">
                    signup
                </button>
            </form>
        </div>
    );
};

export default Signup;
