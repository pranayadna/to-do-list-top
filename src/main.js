const projectList = [];

function createTask(initialTitle, initialDescription) {
    let title = initialTitle;
    let description = initialDescription;
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

function createProject(name) {
    const taskList = [];
    let projectName = name;

    const setProjectName = (newName) => projectName = newName;

    const getProjectName = () => projectName;

    const getTaskList = () => taskList;

    const getSpecificTask = (index) => taskList[index];

    const printTaskList = () => {
        taskList.forEach((task, index) => {
            console.log(`Task ${index + 1}: ${task.getTitle()}`);
        })
    }
    
    const addTask = (title, description) => {
        const task = createTask(title, description);
        taskList.push(task);
        return task;
    };

    return { 
        setProjectName, 
        getProjectName, 
        getTaskList, 
        getSpecificTask, 
        printTaskList,
        addTask 
    };
}

function projectManager() {
    const addProject = (name) => {
        const project = createProject(name);
        projectList.push(project);
        return project;
    }

    const getProjects = () => projectList;

    const printProjectList = () => {
        // console.log(`Total ${projectList.length} projects`);
        projectList.forEach((project, index) => {
            console.log(`Project ${index + 1}: ${project.getProjectName()}`);
        })
    }

    return { 
        addProject, 
        getProjects,
        printProjectList 
    };
}

function AppController() {
    const projectManagerInstance = projectManager();

    const welcomeMessage = () => {
        console.log("Welcome to the To-Do List TOP app.");
        console.log("Add a new project:");
    }

    const addNewProject = (name) => {
        projectManagerInstance.addProject(name);
        console.log(`Project by name "${name}" is added`);
        projectManagerInstance.printProjectList();
        console.log("Choose your project to add a new task:");
    }

    const addTaskToProject = (index, title, description) => {
        projectList[index - 1].addTask(title, description);
        console.log(`Task "${title}" with description "${description}" added to project "${projectList[index - 1].getProjectName()}"`);
        projectList[index - 1].printTaskList();
    }

    welcomeMessage();

    return { 
        addNewProject,
        addTaskToProject
    };
}

const app = AppController();