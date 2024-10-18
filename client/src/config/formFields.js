export const signupFormFields = [
    {
        label: 'Name',
        name: 'name',
        type: 'text',
        fieldType: 'input',
        placeholder: 'Enter your name'
    },
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        fieldType: 'input',
        placeholder: 'Enter your email address'
    },
    {
        label: 'Password',
        name: 'password',
        type: 'password',
        fieldType: 'input',
        placeholder: 'Enter your password'
    },
    {
        label: 'Mobile',
        name: 'mobile',
        type: 'number',
        fieldType: 'input',
        placeholder: 'Enter your mobile number'
    }
];

export const loginFormFields = [
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        fieldType: 'input',
        placeholder: 'Enter your email address'
    },
    {
        label: 'Password',
        name: 'password',
        type: 'password',
        fieldType: 'input',
        placeholder: 'Enter your password'
    }
];

export const taskFields = [
    {
        label: 'Title',
        name: 'title',
        type: 'text',
        fieldType: 'input',
        placeholder: 'Enter task title'
    },
    {
        label: 'Description',
        name: 'description',
        type: 'text',
        fieldType: 'input',
        placeholder: 'Enter task description'
    },
    {
        label: 'Status',
        name: 'status',
        fieldType: 'select',
        options: [
            { value: 'pending', label: 'Pending' },
            { value: 'in-progress', label: 'In-Progress' },
            { value: 'completed', label: 'Completed' }
        ],
        placeholder: 'Choose task status'
    },
    {
        label: 'DueDate',
        name: 'dueDate',
        fieldType: 'date',
        placeholder: 'Choose task due date'
    },
    {
        label: 'Category',
        name: 'category',
        type: 'text',
        fieldType: 'input',
        placeholder: 'Enter task category'
    }
];