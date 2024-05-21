function createTodoList() {
    const todos = [];

    const getTodos = () => todos;

    const getSpecificTodos = (index) => todos[index];
    
    const addTodoItem = () => {
        const todo = createTodoItem();
        todos.push(todo);
    };

    return { getTodos, getSpecificTodos, addTodoItem };
}

function createTodoItem() {
    let title = '';
    let description = '';
    let dueDate = '30/05/2024';
    let priority = 'Low';

    const setTitle = (newTitle) => {
        title = newTitle;
    };

    const getTitle = () => title;
    
    const setDescription = (newDescription) => {
        description = newDescription;
    };

    const getDescription = () => description;

    const setDueDate = (date) => {
        dueDate = date;
    };

    const getDueDate = () => dueDate;

    const setPriority = (level) => {
        if (level === 'Low') {
            priority = 'Low';
        } else if (level === 'Medium') {
            priority = 'Medium';
        } else if (level === 'High') {
            priority = 'High';
        }
    };

    const getPriority = () => priority;

    return {
        setTitle,
        getTitle,
        setDescription,
        getDescription,
        setDueDate,
        getDueDate,
        setPriority,
        getPriority
    };
}

const todos = createTodoList();
const addTodo1 = todos.addTodoItem();
const todo1 = todos.getSpecificTodos(0);