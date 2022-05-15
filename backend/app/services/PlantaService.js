const Planta = require('./../models/Planta');

class PlantaService {
    static create(id, nombre, nombre_cientifico, estatus, ubicacion, descripcion, imagen) {
        return new Planta(id, nombre, nombre_cientifico, estatus, ubicacion, descripcion, imagen);
    }
}

module.exports = PlantaService;