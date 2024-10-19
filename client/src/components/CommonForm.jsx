import { Button, DatePicker, Form, Input, Select } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const CommonForm = ({ formFields, form, buttonText, onSubmit, formType }) => {

    // dynamically create fields
    const dynamicFieldsType = (fields) => {
        let element = null;

        switch (fields.fieldType) {
            case 'input':
                element = <Form.Item
                    key={fields.name}
                    label={fields.label}
                    name={fields.name}
                    className='font-semibold text-xl'
                    rules={
                        fields.name == 'description' ||
                            fields.name == 'dueDate' ||
                            fields.name == 'category' ? null :
                            [
                                { required: true, message: `${fields.name} is required` }
                            ]
                    }
                >
                    <Input
                        placeholder={fields.placeholder}
                        size='large'
                        className='shadow-sm rounded-none'
                        type={fields.fieldType || 'date'}
                    />
                </Form.Item>
                break;

            case 'select':
                element = <Form.Item
                    key={fields.name}
                    label={fields.label}
                    name={fields.name}
                    className='font-semibold text-xl'
                    rules={[
                        { required: true, message: `${fields.name} is required` }
                    ]}
                >
                    <Select
                        key={fields.name}
                        placeholder={fields.placeholder}
                        className='mb-2 shadow-sm border-none'
                        options={fields.options}
                        size='large'
                    />
                </Form.Item>
                break;

            case 'date':
                element = (
                    <Form.Item
                        key={fields.name}
                        label={fields.label}
                        name={fields.name}
                        className='font-semibold text-xl'
                    // rules={[{ required: true, message: `${fields.label} is required` }]}
                    >
                        <DatePicker
                            placeholder={fields.placeholder}
                            className='shadow-sm rounded-none'
                            style={{ width: '100%' }}
                            size='large'
                        />
                    </Form.Item>
                );
                break;

            default: return null;
        }

        return element;
    }

    return (
        <Form layout='vertical' onFinish={onSubmit} form={form}>
            {
                formFields && formFields.map((fields) => (
                    dynamicFieldsType(fields)
                ))
            }

            <Button
                className={`shadow-sm font-bold w-full rounded-none 
                    ${formType === 'editTaskForm' ? 'bg-red-500' : ''}`}
                size='large'
                type='primary'
                htmlType='submit'
            >{buttonText || "SUBMIT"}</Button>

            {
                formType === 'signup' ? (
                    <p className='my-3 text-center flex gap-2 items-center justify-center'>Already have an account?
                        <Link to={'/login'} className='border-b border-black'> Login Now</Link>
                    </p>
                ) : formType === 'login' ? (
                    <p className='my-3 text-center flex gap-2 items-center justify-center'>Don't have an account?
                        <Link to={'/signup'} className='border-b border-black'> Register Now</Link>
                    </p>
                ) : (
                    null
                )
            }
        </Form>
    )
}

export default CommonForm