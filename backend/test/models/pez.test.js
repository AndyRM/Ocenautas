const Pez = require('./../../app/models/pez');

describe("Unit Test fot Pez class", () => {
    test ("should create a new Pez object", () => {
        const merlin = new Pez(1,'Merlin', 'merlin_cientifico', 'Sin peligro', 'ubicacion', 'descripcion', 'imagen');
        expect(merlin.id).toBe(1);
        expect(merlin.nombre).toBe('Merlin');
        expect(merlin.nombre_cientifico).toBe('merlin_cientifico');
        expect(merlin.estatus).toBe('Sin peligro');
        expect(merlin.ubicacion).toBe('ubicacion');
        expect(merlin.descripcion).toBe('descripcion');
        expect(merlin.imagen).toBe('imagen');
    });
})
