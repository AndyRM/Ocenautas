const Pez = require('./../models/pez');

class PezService {
    static create(id, nombre, nombre_cientifico, estatus, ubicacion, descripcion, imagen) {
        return new Pez(id, nombre, nombre_cientifico, estatus, ubicacion, descripcion, imagen);
    }
}

module.exports = PezService;