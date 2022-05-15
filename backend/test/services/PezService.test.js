const PezService = require('./../../app/services/PezService');

describe("Unit Test fot PezService", () => {
    test("Create a new pez using PezService", () => {
        const pez = PezService.create(1, 'Pez', 'pez_cientifico', 'Sin peligro', 'ubicacion', 'descripcion', 'imagen')
        expect(pez.id).toBe(1);
        expect(pez.nombre).toBe('Pez');
        expect(pez.nombre_cientifico).toBe('pez_cientifico');
        expect(pez.estatus).toBe('Sin peligro');
        expect(pez.ubicacion).toBe('ubicacion');
        expect(pez.descripcion).toBe('descripcion');
    })
})