const argv = require('./config/yargs').argv;
const todo = require('./por-hacer/por-hacer');
const colors = require('colors');
let command = argv._[0];

switch (command) {
    case 'crear':
        let task = todo.createTask(argv.descripcion);
        console.log(task);
        break;
    case 'listar':
        let taskList = todo.getTasks();

        console.log('======TODO list========'.green);
        for (let task of taskList) {

            if (task.complete.toString() === argv.completado.toString()) {
                console.log(task.description);
                console.log('Estado', task.complete);
            }
        }
        console.log('======================='.green);

        break;
    case 'actualizar':
        let update = todo.updateTask(argv.descripcion, argv.completado);
        console.log(update);
        break;
    case 'borrar':
        let del = todo.deleteTask(argv.descripcion);
        console.log(del);
        break;
    default:
        console.log('comando no reconocido');
        break;
}