import { Form, message } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CommonForm from '../components/CommonForm'
import { loginFormFields } from '../config/formFields'
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/slices/auth-slice'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginForm] = Form.useForm();

    const handleOnSubmit = (values) => {
        dispatch(loginUser(values)).then((data) => {
            if (data.payload.success) {
                message.success(data.payload.message || "Login successful!");
                loginForm.resetFields();
                navigate('/app/task');
            } else {
                message.error(data.payload.response.data.message || data.payload.message || "Login Failed, try again!");
            }
        });
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
                    form={loginForm}
                />
            </div>
        </div>
    )
}

export default Login