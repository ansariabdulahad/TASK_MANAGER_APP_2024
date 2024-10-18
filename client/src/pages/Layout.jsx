import React, { Fragment, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import CommonHeader from '../components/CommonHeader';

const MainLayout = ({ isAuthenticated }) => {

    const navigate = useNavigate();
    const token = sessionStorage.getItem('authToken');

    useEffect(() => {
        if (!token && !isAuthenticated) return navigate('/login');
    }, [isAuthenticated, navigate, token]);

    if (!isAuthenticated && !token) return null;

    return (
        <Fragment>
            <CommonHeader />
            <Outlet />
        </Fragment >
    )
}

export default MainLayout