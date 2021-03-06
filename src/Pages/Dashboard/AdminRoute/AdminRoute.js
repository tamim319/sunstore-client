import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const {user, admin, isloading} = useAuth();
    const location = useLocation();

    if(isloading){
        return <CircularProgress />
    }
    if(user.email && admin){
        return children;
    }
    return <Navigate to="/" state={{ from: location}} />
};

export default AdminRoute;