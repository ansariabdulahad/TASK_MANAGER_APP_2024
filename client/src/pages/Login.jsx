import { Button, Form, Input } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CommonForm from '../components/CommonForm'
import { loginFormFields } from '../config/formFields'

const Login = () => {
    const navigate = useNavigate();

    const handleOnSubmit = (values) => {
        console.log(values);
        navigate('/app/task');
    }

    return (
        <div className='flex justify-center mx-auto gap-4 p-4 h-screen bg-slate-100'>
            <div className='min-w-[300px] p-2'>
                <h2 className='border-b-2 border-black text-center text-xl my-3'>LOGIN NOW</h2>

                <CommonForm
                    formFields={loginFormFields}
                    buttonText={'Login Now'}
                    onSubmit={handleOnSubmit}
                    formType={'login'}
                />
            </div>
        </div>
    )
}

export default Login