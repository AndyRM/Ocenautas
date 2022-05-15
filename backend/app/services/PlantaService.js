const Planta = require('./../models/planta');

class PlantaService {
    static create(id, nombre, nombre_cientifico, estatus, ubicacion, descripcion, imagen) {
        return new Planta(id, nombre, nombre_cientifico, estatus, ubicacion, descripcion, imagen);
    }
}

module.exports = PlantaService;