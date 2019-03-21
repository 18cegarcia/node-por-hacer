const fs  =require ('fs');

let listadoPorHacer=[];

const guardardb= () =>{
    return new Promise((resolve,reject) => {
        let data = JSON.stringify(listadoPorHacer);
        fs.writeFile('db/data.json',data,(err) =>{
            if(err) reject (err)
            else
                resolve(`archivo`);
        });
    });
}


const crear =(descripcion) =>{
    let porHacer ={
        descripcion,
        completado:false
    }
    cargarDb();
    listadoPorHacer.push (porHacer);
    guardardb();
    return listadoPorHacer;
}


const cargarDb =()=>{
    try{
        listadoPorHacer = require('../db/data.json');
    }catch (e) {
listadoPorHacer=[];
    }
}

const getListado =()=>{
    cargarDb();
    return listadoPorHacer;
}

const actualizar=(description,completado) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === description);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardardb();
        return true;
    } else {
        return false;
    }
}
const eliminar=(description)=>{
    cargarDb();
    let nuevoListado = listadoPorHacer.filter(tarea =>tarea.descripcion!==description);
    if (listadoPorHacer.length===nuevoListado.length){
        return false;
    }else{
        listadoPorHacer= nuevoListado;
        guardardb();
        return true;
    }
}
module.exports={
    crear,
    getListado,
    actualizar,
    eliminar
};