import { Button, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import CommonForm from '../components/CommonForm'
import { signupFormFields } from '../config/formFields'

const Signup = () => {

    const handleOnSubmit = (values) => {
        console.log(values);

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
                />
            </div>
        </div>
    )
}

export default Signup