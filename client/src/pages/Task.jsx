import { Button, Divider, Form, message, Modal, Select, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createNewTask, getAllTasks, getTaskByFilter } from '../store/slices/task-slice';
import { FileAddOutlined } from '@ant-design/icons';
import CommonForm from '../components/CommonForm';
import { taskFields } from '../config/formFields';

const Task = () => {

    const dispatch = useDispatch();
    const [tasksData, setTasksData] = useState([]);
    const [taskModal, setTaskModal] = useState(false);
    const [fetchAllTask, setFetchAllTask] = useState(false);
    const [filterCategory, setFilterCategory] = useState("");
    const [filterStatus, setFilterStatus] = useState("");
    const [taskForm] = Form.useForm();

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

    // handle task modal close
    const handleTaskModalCancel = () => {
        setTaskModal(false);
    }

    const handleCreateNewTask = (values) => {
        dispatch(createNewTask(values)).then((data) => {
            if (data.payload.success) {
                message.success(data.payload.message || "Task created successfully!");
                taskForm.resetFields();
                setTaskModal(false);
                setFetchAllTask(true);
            } else {
                setFetchAllTask(false);
                message.error(data.payload.response.data.message || "Unable to create task!");
            }
        });
    }

    // handle filter change
    const handleFilterChange = (values) => {

        if (values == "pending" || values == "in-progress" || values == "completed") {
            setFilterStatus(values);
        } else {
            setFilterCategory(values);
        }
    }

    useEffect(() => {
        let filter = "";
        if (filterCategory) filter += `category=${filterCategory}&`;
        if (filterStatus) filter += `status=${filterStatus}`;
        dispatch(getTaskByFilter(filter)).then((data) => {
            if (data?.payload?.success) {
                let updatedTasks = data?.payload?.data.map((item) => ({
                    ...item,
                    key: item._id
                }));
                setTasksData(updatedTasks);
            } else {
                message.error(data.payload.response.data.message || "Server error!");
            }
        });
    }, [filterStatus, filterCategory]);

    useEffect(() => {
        dispatch(getAllTasks()).then((data) => {
            if (data?.payload?.success) {
                let updatedTasks = data?.payload?.data.map((item) => ({
                    ...item,
                    key: item._id
                }));
                setTasksData(updatedTasks);
            } else {
                message.error(data.payload.response.data.message || "Server error!");
            }
        });
    }, [dispatch, fetchAllTask]);

    return (
        <div className='p-4'>
            <div className='flex items-center border-b my-5 justify-between space-x-2 bg-slate-200 p-4 rounded shadow-sm'>
                <div className='border-r border-black'>
                    <h2 className='mx-1'>Filter By: </h2>
                </div>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center'>
                    <div className='flex flex-col sm:flex-row items-start gap-1 w-full'>
                        <label htmlFor="category">Category: </label>
                        <Select
                            placeholder="Filter by category"
                            className='mb-2 shadow-sm w-full'
                            options={[
                                { value: 'work', label: 'Work' },
                                { value: 'frontend', label: 'frontend' },
                                { value: 'backend', label: 'Backend' }
                            ]}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className='flex flex-col sm:flex-row items-start gap-1 w-full'>
                        <label htmlFor="status">Status: </label>
                        <Select
                            placeholder="Filter by status"
                            className='mb-2 shadow-sm w-full'
                            options={[
                                { value: 'pending', label: 'Pending' },
                                { value: 'in-progress', label: 'In-Progress' },
                                { value: 'completed', label: 'Completed' }
                            ]}
                            onChange={handleFilterChange}
                        />
                    </div>
                </div>
            </div>

            <div className='my-10 bg-slate-200 p-4 rounded shadow-sm'>
                <Button
                    // type='primary'
                    size='large'
                    className='float-end my-4 shadow-sm bg-black text-white'
                    onClick={() => setTaskModal(true)}
                >
                    <FileAddOutlined />
                    Create New Task
                </Button>

                <Divider>Tasks List</Divider>

                <Table
                    dataSource={tasksData || []}
                    columns={columns || []}
                    scroll={{
                        x: 'auto',
                    }}
                    pagination={{
                        pageSize: 5
                    }}
                    className='shadow-sm'
                />
            </div>

            {/* create new task */}

            <Modal
                open={taskModal}
                title="Create a new task"
                onCancel={handleTaskModalCancel}
                footer={false}
            >
                <CommonForm
                    formFields={taskFields}
                    form={taskForm}
                    buttonText={'Create Task'}
                    onSubmit={handleCreateNewTask}
                    formType={'createTaskForm'}
                />
            </Modal>
        </div>
    )
}

export default Task