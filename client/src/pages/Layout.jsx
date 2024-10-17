import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import CommonHeader from '../components/CommonHeader';

const MainLayout = () => {

    return (
        <Fragment>
            <CommonHeader />

            <Outlet />
        </Fragment >
    )
}

export default MainLayout