import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div
            className='bg-black flex flex-col gap-4 items-center justify-center h-screen'
        >
            <h2 className='font-semibold border-b text-white'>
                Welcome to the Task Manager App
            </h2>
            <Button className='font-bold'>
                <Link to={'/signup'}>Signup Now</Link>
            </Button>
        </div>
    )
}

export default Home