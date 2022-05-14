const Pez = require('./app/models/pez');
const Planta = require('./app/models/planta');

const merlin = new Pez(1,'Merlin', 'merlin_cientifico', 'Sin peligro', [{"11.11.11": "22.22.22"}], 'descripcion', 'imagen');
const alga = new Planta(1,'Alga', 'alga_cientifico', 'Sin peligro', [{"11.11.11": "22.22.22"}], 'descripcion', 'imagen');
console.log(merlin);
console.log(alga);