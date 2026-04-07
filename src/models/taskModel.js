let tasks = [];

export const getTasks = () => tasks;

export const getTaskById = (id) => {
    return tasks.find(t => t.id === id);
};

export const createTask = (task) => {
    tasks.push(task);
};

export const updateTask = (id, data) => {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...data };
    }
};

export const deleteTask = (id) => {
    tasks = tasks.filter(t => t.id !== id);
};