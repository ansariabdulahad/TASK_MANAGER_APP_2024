import React from 'react'
import CommonForm from '../components/CommonForm'
import { signupFormFields } from '../config/formFields'
import { useDispatch } from 'react-redux'
import { signupUser } from '../store/slices/auth-slice'
import { Form, message } from 'antd'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signupForm] = Form.useForm();

    const handleOnSubmit = (values) => {
        dispatch(signupUser(values)).then((data) => {
            if (data.payload.success) {
                message.success(data.payload.message || "Registration successful, please login now!");
                signupForm.resetFields();
                navigate('/login');
            } else {
                message.error(data.payload.response.data.message || "Registration Failed, try again!");
            }
        })
    }

    return (
        <div className='flex justify-center mx-auto gap-4 p-4 h-screen bg-slate-100'>
            <div className='min-w-[300px] p-2'>
                <h2 className='border-b-2 border-black text-center text-xl my-3'>SIGNUP NOW</h2>

                <CommonForm
                    formFields={signupFormFields}
                    buttonText={'Register Now'}
                    onSubmit={handleOnSubmit}
                    formType={'signup'}
                    form={signupForm}
                />
            </div>
        </div>
    )
}

export default Signup