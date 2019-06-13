const fs = require("fs");

let listTodo = [];

const dbsave = () => {
    return new Promise((resolve, reject) => {

        let data = JSON.stringify(listTodo);

        fs.writeFile('./db/data.json', data, (err) => {
            if (err)
                reject(err);
            else
                resolve('data.json');
        });

    });

}

const dbload = () => {
    try {

        listTodo = require('../db/data.json');

    } catch (error) {
        listTodo = [];
    }
}

const createTask = (description) => {

    dbload();

    let task = {
        description,
        complete: false
    };

    listTodo.push(task);

    dbsave();

    return listTodo
}

const getTasks = () => {
    dbload();
    return listTodo;
}

const updateTask = (description, complete = true) => {
    dbload();

    let index = listTodo.findIndex(task => {
        return task.description === description;
    })

    if (index >= 0) {
        listTodo[index].complete = complete;
        dbsave();
        return true;
    } else {
        return false;
    }
}

const deleteTask = (description) => {

    dbload();

    let index = listTodo.findIndex(task => {
        return task.description === description;
    })

    if (index >= 0) {
        listTodo.splice(index, 1);
        dbsave();
        return true;
    } else {
        return false;
    }


}



module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
}