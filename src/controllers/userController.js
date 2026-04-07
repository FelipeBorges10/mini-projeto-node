import * as userModel from "../models/userModel.js";

export const getAll = (req, res) => {
    res.json(userModel.getUsers());
};

export const getById = (req, res) => {
    const user = userModel.getUserById(Number(req.params.id))
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(user);
};

export const create = (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error : "Dados incompletos" });
}

const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    role: role || "user"
};

userModel.createUser(newUser);
res.status(201).json(newUser);
};

export const update = (req, res) => {
    userModel.updateUser(Number(req.params.id), req.body);
    res.json({ message: "Atualizado com sucesso" });
};

export const remove = (req, res) => {
    userModel.deleteUser(Number(req.params.id));
    res.json({ message: "Deletado com sucesso" });
};