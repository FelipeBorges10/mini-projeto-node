let users = [];

export const getUsers = () => users;

export const getUserById = (id) => {
    return users.find(u => u.id === id);
};

export const createUser = (user) => {
    users.push(user);
};

export const updateUser = (id, data) => {
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        users[index] =
{ ...users[index], ...data };
    }
};

export const deleteUser = (id) => {
    users = users.filter(u => u.id !== id);
};

export const findByEmail = (email) => {
    return users.find(u => u.email === email);
};