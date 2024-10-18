import React from 'react'
import { AndroidOutlined, LogoutOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout'
import { Button, Menu, message } from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/slices/auth-slice';

const CommonHeader = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const MenuItems = [
        {
            key: 'task',
            label: <Link to={'task'}>Task</Link>
        },
        {
            key: 'category',
            label: <Link to={'category'}>Category</Link>
        }
    ];

    const handleLogout = () => {
        dispatch(logoutUser());
        message.success("User logged out successfully!");
        navigate('/login');
    }

    return (
        <Header className="flex justify-between items-center w-full p-2 md:p-8 gap-2 bg-slate-100 shadow-lg">
            {/* Logo on the left */}
            <div className="font-semibold flex text-sm gap-1 border-b">
                <AndroidOutlined />
                Task Manager
            </div>

            {/* Centered Menu */}
            <Menu
                theme="light"
                mode="horizontal"
                className="flex-1 justify-center bg-transparent"
                selectable={true}
                items={MenuItems}
                selectedKeys={location.pathname.includes('task') ? 'task' : 'category'}
            />

            {/* Logout Button on the right */}
            <Button
                type="primary"
                icon={<LogoutOutlined />}
                className="logout-btn"
                onClick={handleLogout}
            >
                Logout
            </Button>
        </Header>
    )
}

export default CommonHeader