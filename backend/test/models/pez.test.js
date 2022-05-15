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
    test('getters', () => {
        const merlin = new Pez(2,'Merlin', 'merlin_cientifico', 'Sin peligro', 'ubicacion', 'descripcion', 'imagen');
        expect(merlin.getId).toBe(2);
        expect(merlin.getNombre).toBe('Merlin');
        expect(merlin.getNombreCientifico).toBe('merlin_cientifico');
        expect(merlin.getEstatus).toBe('Sin peligro');
        expect(merlin.getUbicacion).toBe('ubicacion');
        expect(merlin.getDescripcion).toBe('descripcion');
        expect(merlin.getImagen).toBe('imagen');
    })
})
