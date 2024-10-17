import { Divider, Select, Table } from 'antd'
import React from 'react'

const Task = () => {

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            email: 'Mike@gmail.com',
            mobile: 322534345,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Due Date',
            dataIndex: 'dueDate',
            key: 'dueDate',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        },
    ];

    return (
        <div className='p-4'>
            <div className='flex items-center border-b my-5 justify-between space-x-2'>
                <div>
                    <h2>Filter By: </h2>
                </div>
                <div>
                    <label htmlFor="category">Category: </label>
                    <Select
                        placeholder="Filter by category"
                        className='mb-2 shadow-sm'
                        options={[
                            { value: 'work', label: 'Work' },
                            { value: 'frontend', label: 'frontend' },
                            { value: 'backend', label: 'Backend' }
                        ]}
                    />
                </div>
                <div>
                    <label htmlFor="status">Status: </label>
                    <Select
                        placeholder="Filter by status"
                        className='mb-2 shadow-sm'
                        options={[
                            { value: 'pending', label: 'Pending' },
                            { value: 'in-progress', label: 'In-Progress' },
                            { value: 'completed', label: 'Completed' }
                        ]}
                    />
                </div>
            </div>

            <div className='my-10'>
                <Divider>Tasks List</Divider>
                <Table
                    dataSource={dataSource || []}
                    columns={columns || []}
                    scroll={{
                        x: 'auto',
                    }}
                    className='shadow-sm'
                />
            </div>
        </div>
    )
}

export default Task