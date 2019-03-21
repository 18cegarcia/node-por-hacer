const colors = require('colors');
const argv =require('./config/yargs').argv;
const crear =require('./procesos/crear');
let comando = argv._[0];
switch (comando) {
    case 'crear':
        console.log('crear por hacer');
        let tarea = crear.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'actualizar':
        let  estado = crear.actualizar(argv.descripcion,argv.completado);
        console.log(estado);

        break;
    case 'listar':
        let listado =crear.getListado();
        for(let tarea of listado){
            console.log('=================POR HACER===================='.green);
            console.log(tarea.descripcion);
            console.log('estado:',tarea.completado);
            console.log('=============================================='.green);
        }

    case 'eliminar':
        let  eliminar = crear.eliminar(argv.descripcion);
        console.log(eliminar);

    break;
    default:
        console.log('opcion no valida');
}