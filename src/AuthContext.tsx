import * as React from 'react';

interface iLoginState {
    status: 'success' | 'error' | 'pending';
    error: unknown;
    user: { username: string };
}

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const getUser = () => sleep(1000).then(() => ({ username: 'Nick' }));

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const [state, setState] = React.useState({
        status: 'pending',
        error: null,
        user: null,
    });

    React.useEffect(() => {
        // Get user function
        getUser().then(
            (user) => setState({ status: 'success', error: null, user }),
            (error) => setState({ status: 'error', error, user: null }),
        );
    }, []);

    return (
        <AuthContext.Provider value={state}>
            {state.status === 'pending' ? (
                'Loading...'
            ) : state.status === 'error' ? (
                <div>
                    Oh no
                    <div>
                        <pre>{state.error.message}</pre>
                    </div>
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

export const useAuthState = (): {
    isPending: boolean;
    isError: boolean;
    isSuccess: boolean;
    isAuthenticated: boolean;
    status: 'success' | 'error' | 'pending';
    error: unknown;
    user: { username: string };
} => {
    const state: iLoginState = React.useContext(AuthContext);
    const isPending = state.status === 'pending';
    const isError = state.status === 'error';
    const isSuccess = state.status === 'success';
    const isAuthenticated = state.user && isSuccess;

    return {
        ...state,
        isPending,
        isError,
        isSuccess,
        isAuthenticated,
    };
};
