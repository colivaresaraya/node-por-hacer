const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    describe: 'marca completado o pendinete la tarea'

}
const argv = require('yargs')
    .command('listar', 'lista las tareas por hacer segun estado', {
        completado
    })
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}