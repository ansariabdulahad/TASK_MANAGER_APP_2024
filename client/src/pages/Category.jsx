import { DeleteOutlined, EditOutlined, FileAddOutlined } from '@ant-design/icons'
import { Button, Card, Form, message, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import CommonForm from '../components/CommonForm'
import { categoryFields } from '../config/formFields'
import { createNewCategory, deleteCategory, editCategory, getAllCategory } from '../store/slices/category-slice'
import { useDispatch } from 'react-redux'

const Category = () => {

    const [categoryModal, setCategoryModal] = useState(false);
    const [categoryEdit, setCategoryEdit] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const [editCategoryId, setEditCategoryId] = useState(null);
    const [categoryDeleted, setCategoryDeleted] = useState(false);
    const [categoryForm] = Form.useForm();
    const dispatch = useDispatch();

    const handleCreateCategory = (values) => {
        if (values?.category != undefined) {
            categoryForm.setFields([
                {
                    name: 'category',
                    errors: []
                }
            ]);

            dispatch(createNewCategory({ category: values.category.toLowerCase() })).then((data) => {
                if (data.payload.success) {
                    message.success(data.payload.message || "Category created successfully!");
                    categoryForm.resetFields();
                    setCategoryModal(false);
                } else {
                    message.error(data.payload.response.data.message || "Unable to create category!");
                }
            });
        } else {
            categoryForm.setFields([
                {
                    name: 'category',
                    errors: [
                        "Category is required!"
                    ]
                }
            ])
        }
    }

    // handle edit category
    const handleEditCategory = (getTask) => {
        let values = {
            category: getTask?.category
        }
        setCategoryModal(true);
        setCategoryEdit(true);
        setEditCategoryId(getTask?._id);
        categoryForm.setFieldsValue(values);
    }

    // hanlde edit category
    const handleEditCategoryOnFinish = (values) => {
        dispatch(editCategory({ id: editCategoryId, formData: { category: values.category.toLowerCase() } })).then((data) => {
            if (data.payload.success) {
                message.success(data.payload.message || "Category edited successfully!");
                categoryForm.resetFields();
                setCategoryModal(false);
                setCategoryEdit(false);
                setEditCategoryId(null);
                dispatch(getAllCategory());
            } else {
                message.error(data.payload.response.data.message || "Unable to edit category!");
            }
        });
    }

    // handle delete category
    const handleDeleteCategory = (getCurrentId) => {
        dispatch(deleteCategory(getCurrentId)).then((data) => {
            if (data.payload.success) {
                message.success(data.payload.message || "Category deleted successfully!");
                dispatch(getAllCategory());
                setCategoryDeleted(true);
            } else {
                setCategoryDeleted(false);
                message.error(data.payload.response.data.message || "Unable to delete category!");
            }
        });
    }

    // handle category modal close
    const handleCategoryModalCancel = () => {
        setCategoryModal(false);
        setCategoryEdit(false);
        setEditCategoryId(null);
        categoryForm.resetFields();
    }

    useEffect(() => {
        dispatch(getAllCategory()).then((data) => {
            if (data?.payload?.success) {
                setCategoryData(data?.payload?.data);
            } else {
                message.error(data.payload.response.data.message || "Server error!");
                sessionStorage.removeItem("authToken");
            }
        });
    }, [dispatch, categoryDeleted, categoryEdit, categoryModal]);

    return (
        <div className='p-4'>
            <div className='flex items-center justify-between my-5 bg-slate-200 p-4 rounded shadow-sm'>
                <h2 className='font-bold underline'>Category List</h2>
                <Button
                    size='large'
                    className='bg-black text-white font-bold shadow-sm'
                    onClick={() => setCategoryModal(true)}
                >
                    <FileAddOutlined />
                    Create Category
                </Button>
            </div>

            <div className='bg-slate-200 p-4 rounded shadow-sm grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {
                    categoryData && categoryData.length > 0 ? (
                        categoryData.map((category) => (
                            <Card
                                key={category._id}
                                hoverable
                                className='shadow-sm'
                            >
                                <div className='flex flex-col items-center gap-3 justify-center'>
                                    <h2 className='font-bold capitalize'>{category.category}</h2>
                                    <div className='flex gap-2'>
                                        <Button
                                            icon={<EditOutlined />}
                                            shape='circle'
                                            className='shadow-sm bg-green-600 text-white'
                                            onClick={() => handleEditCategory(category)}
                                        />
                                        <Button
                                            icon={<DeleteOutlined />}
                                            shape='circle'
                                            className='shadow-sm bg-red-500 text-white'
                                            onClick={() => handleDeleteCategory(category._id)}
                                        />
                                    </div>
                                </div>
                            </Card>
                        ))
                    ) : (null)
                }
            </div>

            <Modal
                open={categoryModal}
                title={categoryEdit ? 'Edit Category' : "Create Category"}
                onCancel={handleCategoryModalCancel}
                footer={false}
            >
                <CommonForm
                    formFields={categoryFields}
                    form={categoryForm}
                    buttonText={categoryEdit ? 'Save Changes' : 'Create Category'}
                    onSubmit={categoryEdit ? handleEditCategoryOnFinish : handleCreateCategory}
                    formType={categoryEdit ? 'editCategoryForm' : 'createCategoryForm'}
                />
            </Modal>
        </div>
    )
}

export default Category