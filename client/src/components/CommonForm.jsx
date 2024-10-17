import { Button, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const CommonForm = ({ formFields, buttonText, onSubmit, formType }) => {

    return (
        <Form layout='vertical' onFinish={onSubmit}>
            {
                formFields && formFields.map((fields) => (
                    <Form.Item
                        key={fields.name}
                        label={fields.label}
                        name={fields.name}
                        className='font-semibold text-xl'
                        rules={[
                            { required: true, message: `${fields.name} is required` }
                        ]}
                    >
                        <Input
                            placeholder={fields.placeholder}
                            size='large'
                            className='shadow-sm rounded-none'
                            type={fields.fieldType}
                        />
                    </Form.Item>
                ))
            }

            <Button
                className='shadow-sm font-bold w-full rounded-none'
                size='large'
                type='primary'
                htmlType='submit'
            >{buttonText || "SUBMIT"}</Button>

            {
                formType === 'signup' ? (
                    <p className='my-3 text-center flex gap-2 items-center justify-center'>Already have an account?
                        <Link to={'/login'} className='border-b border-black'> Login Now</Link>
                    </p>
                ) : (
                    <p className='my-3 text-center flex gap-2 items-center justify-center'>Don't have an account?
                        <Link to={'/signup'} className='border-b border-black'> Register Now</Link>
                    </p>
                )
            }
        </Form>
    )
}

export default CommonForm