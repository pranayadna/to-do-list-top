function createTodoList() {
    const todoList = [];

    const getTodoList = () => todoList;

    const getSpecificTodo = (index) => todos[index];
    
    const addTodoItem = () => {
        const todo = createTodoItem();
        todoList.push(todo);
        return todo;
    };

    return { getTodoList, getSpecificTodo, addTodoItem };
}

function createTodoItem() {
    let title = 'Title Template';
    let description = 'This is description template...';
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

function createProjectList() {
    const projects = [];

    const addTodoList = () => {
        const todoList = createTodoList();
        projects.push(todoList);
        return todoList;
    }

    const getProjects = () => projects;

    return { addTodoList, getProjects };
}

// Add to-do list to project list
const projects1 = createProjectList();
const projects2 = createProjectList();

// Add to-do item to to-do list
const todoList1 = projects1.addTodoList();
const todoList2 = projects1.addTodoList();

const addTodo1 = todoList1.addTodoItem();

console.log({
    title: addTodo1.getTitle(),
    description: addTodo1.getDescription(),
    dueDate: addTodo1.getDueDate(),
    priority: addTodo1.getPriority(),
});

console.log({
    todo1_item: todoList1.getTodoList(),
    todo2_item: todoList2.getTodoList(),
});

console.log({
    project1_list: projects1.getProjects(),
    project2_list: projects2.getProjects(),
});
