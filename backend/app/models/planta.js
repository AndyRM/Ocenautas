class Planta{
    constructor(id, nombre, nombre_cientifico, estatus, ubicacion, descripcion, imagen){
        this.id = id
        this.nombre = nombre
        this.nombre_cientifico = nombre_cientifico;
        this.estatus = estatus
        this.ubicacion = ubicacion
        this.descripcion = descripcion
        this.imagen = imagen
    }
    get getId(){
        return this.id;
    }
    
    get getNombre(){
        return this.nombre;
    }

    get getNombreCientifico(){ 
        return this.nombre_cientifico;
    }

    get getEstatus(){  
        return this.estatus;
    }

    get getUbicacion(){
        return this.ubicacion;
    }

    get getDescripcion(){
        return this.descripcion;
    }

    get getImagen(){
        return this.imagen;
    }

    set setEstatus(newEstatus){
        this.estatus = newEstatus;
    }

    set setUbicacion(newUbicacion){
        this.ubicacion = newUbicacion;
    }    
}

module.exports = Planta;