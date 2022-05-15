const Planta = require('./../../app/models/planta');

describe("Unit Test fot Planta class", () => {
    test ("should create a new Planta object", () => {
        const planta = new Planta(1,'Planta', 'planta_cientifico', 'Sin peligro', 'ubicacion', 'descripcion', 'imagen');
        expect(planta.id).toBe(1);
        expect(planta.nombre).toBe('Planta');
        expect(planta.nombre_cientifico).toBe('planta_cientifico');
        expect(planta.estatus).toBe('Sin peligro');
        expect(planta.ubicacion).toBe('ubicacion');
        expect(planta.descripcion).toBe('descripcion');
        expect(planta.imagen).toBe('imagen');
    });
    test('Add getters', () => {
        const planta = new Planta(1,'Planta', 'planta_cientifico', 'Sin peligro', 'ubicacion', 'descripcion', 'imagen');
        expect(planta.getId()).toBe(2);
        expect(planta.getNombre()).toBe('Planta');
        expect(planta.getNombreCientifico()).toBe('planta_cientifico');
        expect(planta.getEstatus()).toBe('Sin peligro');
        expect(planta.getUbicacion()).toBe('ubicacion');
        expect(planta.getDescripcion()).toBe('descripcion');
        expect(planta.getImagen()).toBe('imagen');
    });
})