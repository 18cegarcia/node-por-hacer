const optsActualizar={
    descripcion:{
        alias:'d',
        desc:'Descripcion de la tarea',
        demand:true,
    },
    completado:{
        alias:'c',
        default :true
    }
}
const opts ={
    descripcion:{
        alias:'d',
        demand:true,
    }
}
const argv =require('yargs')
    .command ('crear','crear elemento',opts)
    .command( 'actualizar','modificar elemento ',optsActualizar)
    .command('listar','lista los elemetos',opts)
    .command('eliminar','elimina uno de  los elemetos',opts)
    .help()
    .argv;

module.exports={
    argv
};