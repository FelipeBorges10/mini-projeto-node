import * as TaskModel from "../model/taskModel,js";

export const getAll = (req, res) => {
    res.json(TaskModel.getTasks());
};

export const getById = (req, res) => {
    const task = TaskModel.getTaskById(Number(req.params.id));

    if (!task) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
    }

    res.json(task);
};

export const create = (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: "Titulo obrigatório" });
    }

    const newTask = {
        id: Date.now(),
        title
    };

    TaskModel.createTask(newTask);
    res.status(201).json(newTask);
};

export const update = (req, res) => {
    TaskModel.updateTask(Number(req.params.id), req.body);
    res.json({ message: "Tarefa atualizada" });
};

export const remove = (req, res) => {
    TaskModel.deleteTask(Number(req.params.id));
    res.json({ message: "Tarefa deletada" });
};