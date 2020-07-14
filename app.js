const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima');
const color = require('colors');
const { requiresArg } = require('yargs');
const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad...',
        demand: true
    }
}).argv;

/* lugar.traerLugar(argv.direccion)
    .then(console.log)
    .catch(err => console.log(err)); */

/* clima.GetClima(-33.6167, -70.9167)
    .then(console.log)
    .catch(err => console.log(err)); */

const getInfo = async(Dirección) => {

    try {
        const coord = await lugar.traerLugar(Dirección);
        const temp = await clima.GetClima(coord.lat, coord.lng);
        return `La temperatura de la ciudad ${coord.Ciudad} es de ${temp}`.bgYellow;
    } catch (e) {
        return `no se pudo determinar la temperatura de la ciudad ${Dirección}`.bgRed;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);