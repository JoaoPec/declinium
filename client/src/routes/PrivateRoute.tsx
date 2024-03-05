import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ children }: any) => {
    const { signed } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Your asynchronous logic, for example, checking authentication
        const checkAuthentication = async () => {
            // Simulating an asynchronous check, replace with your actual logic
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };

        checkAuthentication();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return signed ? children : <Navigate to="/login" />;
};
