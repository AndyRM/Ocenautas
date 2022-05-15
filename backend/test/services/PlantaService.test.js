const PlantaService = require('./../../app/services/PlantaService');

describe("Unit Test fot PlantaService", () => {
    test("Create a new planta using PlantaService", () => {
        const planta = PlantaService.create(1, 'Planta', 'planta_cientifica', 'Sin peligro', 'ubicacion', 'descripcion', 'imagen')
        expect(planta.id).toBe(1);
        expect(planta.nombre).toBe('Planta');
        expect(planta.nombre_cientifico).toBe('planta_cientifica');
        expect(planta.estatus).toBe('Sin peligro');
        expect(planta.ubicacion).toBe('ubicacion');
        expect(planta.descripcion).toBe('descripcion');
    })
})