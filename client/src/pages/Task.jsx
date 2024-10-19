import { Button, Divider, Form, message, Modal, Select, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createNewTask, deleteTask, editTask, getAllTasks, getTaskByFilter } from '../store/slices/task-slice';
import { DeleteOutlined, EditOutlined, FileAddOutlined } from '@ant-design/icons';
import CommonForm from '../components/CommonForm';
import { taskFields } from '../config/formFields';
import { getAllCategory } from '../store/slices/category-slice';
import dayjs from 'dayjs';

const Task = () => {

    const dispatch = useDispatch();
    const [tasksData, setTasksData] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [taskModal, setTaskModal] = useState(false);
    const [fetchAllTask, setFetchAllTask] = useState(false);
    const [taskEdit, setTaskEdit] = useState(false);
    const [isTaskDeleted, setIsTaskDeleted] = useState(false);
    const [editTaskId, setEditTaskId] = useState(null);
    const [taskCreated, setTaskCreated] = useState(false);
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
            render: (text) => (
                <div className={`p-2 rounded shadow-sm font-bold w-fit 
                    ${text == 'completed' ? 'bg-green-500 text-white' :
                        text == 'in-progress' ? 'bg-yellow-500' : 'bg-red-500 text-white'}`}>
                    {text}
                </div>
            )
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
            render: (_, obj) => (
                <div className='flex items-center gap-2'>
                    <Button
                        icon={<EditOutlined />}
                        shape='circle'
                        className='shadow-sm bg-green-600 text-white'
                        onClick={() => handleEditTask(obj)}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        shape='circle'
                        className='shadow-sm bg-red-500 text-white'
                        onClick={() => handleDeleteTask(obj._id)}
                    />
                </div>
            )
        },
    ];

    // handle delete task
    const handleDeleteTask = (getCurrentId) => {
        dispatch(deleteTask(getCurrentId)).then((data) => {
            if (data.payload.success) {
                message.success(data.payload.message || "Task deleted successfully!");
                setFetchAllTask(true);
                setIsTaskDeleted(true);
            } else {
                setFetchAllTask(false);
                setIsTaskDeleted(false);
                message.error(data.payload.response.data.message || "Unable to delete task!");
            }
        });
    }

    // handle edit task
    const handleEditTask = (getTask) => {
        let values = {
            title: getTask?.title,
            description: getTask?.description,
            status: getTask?.status,
            dueDate: getTask?.dueDate ? dayjs(getTask?.dueDate) : null,
            category: getTask?.category
        }
        setTaskModal(true);
        setTaskEdit(true);
        setEditTaskId(getTask?._id);
        taskForm.setFieldsValue(values);
    }

    // hanlde edit task
    const handleEditTaskOnFinish = (values) => {
        dispatch(editTask({ id: editTaskId, formData: values })).then((data) => {
            if (data.payload.success) {
                message.success(data.payload.message || "Task edited successfully!");
                taskForm.resetFields();
                setTaskModal(false);
                setFetchAllTask(true);
                setTaskEdit(false);
                setEditTaskId(null);
            } else {
                setTaskModal(false);
                setFetchAllTask(false);
                setTaskEdit(false);
                setEditTaskId(null);
                message.error(data.payload.response.data.message || "Unable to edit task!");
            }
        });
    }

    // handle task modal close
    const handleTaskModalCancel = () => {
        setTaskModal(false);
        setFetchAllTask(true);
        setTaskEdit(false);
        setEditTaskId(null);
        taskForm.resetFields();
    }

    const handleCreateNewTask = (values) => {
        dispatch(createNewTask(values)).then((data) => {
            if (data.payload.success) {
                message.success(data.payload.message || "Task created successfully!");
                taskForm.resetFields();
                setTaskModal(false);
                setFetchAllTask(true);
                setTaskCreated(true);
            } else {
                setFetchAllTask(false);
                setTaskCreated(false);
                message.error(data.payload.response.data.message || "Unable to create task!");
            }
        });
    }

    // handle filter change
    const handleFilterChange = (values) => {

        if (values == "pending" || values == "in-progress" || values == "completed") {
            setFilterStatus(values);
        } else {
            setFilterCategory(values.toLowerCase());
        }
    }

    // handle filter change
    const handleFilterReset = () => {
        setFilterCategory("");
        setFilterStatus("");
    }

    // fetch categories
    useEffect(() => {
        dispatch(getAllCategory()).then((data) => {
            if (data?.payload?.success) {
                let updatedcategory = data?.payload?.data.map((item) => ({
                    value: item.category.toLowerCase(),
                    label: item.category.toUpperCase()
                }));
                setCategoryList(updatedcategory);
            } else {
                message.error(data.payload.response.data.message || "Server error!");
            }
        });
    }, [dispatch]);

    useEffect(() => {
        let filter = "";
        if (filterCategory) filter += `category=${filterCategory}&`;
        if (filterStatus) filter += `status=${filterStatus}`;

        dispatch(getTaskByFilter(filter)).then((data) => {
            if (data?.payload?.success) {
                let updatedTasks = data?.payload?.data.map((item) => ({
                    ...item,
                    key: item._id,
                    category: item?.category?.toLowerCase(),
                    dueDate: item?.dueDate ? dayjs(item.dueDate).format("YYYY-MM-DD") : null
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
                    key: item._id,
                    category: item?.category?.toLowerCase(),
                    dueDate: item?.dueDate ? dayjs(item.dueDate).format("YYYY-MM-DD") : null
                }));
                setTasksData(updatedTasks);
            } else {
                message.error(data.payload.response.data.message || "Server error!");
                sessionStorage.removeItem("authToken");
            }
        });
    }, [dispatch, fetchAllTask, editTaskId, isTaskDeleted, taskCreated]);

    return (
        <div className='p-4'>
            <div className='flex items-center border-b my-5 justify-between space-x-2 bg-slate-200 p-4 rounded shadow-sm'>
                <div className='border-r border-black'>
                    <h2 className='mx-1'>Filter By: </h2>
                </div>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
                    <div className='flex flex-col sm:flex-row gap-1 w-full'>
                        <label htmlFor="category">Category: </label>
                        <Select
                            placeholder="Filter by category"
                            className='mb-2 shadow-sm w-full'
                            options={categoryList}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className='flex flex-col sm:flex-row gap-1 w-full'>
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
                    <Button
                        className='font-semibold bg-black text-white shadow-sm w-full'
                        onClick={handleFilterReset}
                    >
                        Reset Filter
                    </Button>
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
                title={taskEdit ? 'Edit Task' : "Create a new task"}
                onCancel={handleTaskModalCancel}
                footer={false}
            >
                <CommonForm
                    formFields={taskFields}
                    form={taskForm}
                    buttonText={taskEdit ? 'Save Changes' : 'Create Task'}
                    onSubmit={taskEdit ? handleEditTaskOnFinish : handleCreateNewTask}
                    formType={taskEdit ? 'editTaskForm' : 'createTaskForm'}
                />
            </Modal>
        </div>
    )
}

export default Task