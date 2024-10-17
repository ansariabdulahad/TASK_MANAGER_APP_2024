import React from 'react'
import { AndroidOutlined, LogoutOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout'
import { Button, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom';

const CommonHeader = () => {

    const location = useLocation();

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
                onClick={() => alert('Logout Clicked')}
            >
                Logout
            </Button>
        </Header>
    )
}

export default CommonHeader