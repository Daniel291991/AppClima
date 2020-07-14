const axios = require('axios');

const colors = require('colors');
const Clima = require('../clima/clima.js');
const traerLugar = async(location) => {
    const direccion = encodeURI(location);

    const instance = axios.create({
        //baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion}`,
        baseURL: `https://community-open-weather-map.p.rapidapi.com/find?type=link%252C+accurate&units=metric&q=${direccion}`,
        headers: { 'X-RapidAPI-Key': '6920a5cab5mshe9e33b4e0bad347p1c3c4bjsn3730ffd22031' }
    });

    const resp = await instance.get();

    if (resp.data === null) {
        throw new Error(`error en la busqueda de: "${location}" resultado del objeto Null`);
    } else if (resp.data === 0) {
        throw new Error(`error de resultado en: "${location}" no encontro resultados`);
    }
    const data = resp.data.list[0];
    //console.log(data);
    const Ciudad = data.name;
    const Pais = data.sys.country;
    const Temperatura = data.main.temp;
    const Temp_min = data.main.temp_min;
    const Temp_max = data.main.temp_max;
    const humedad = data.main.humidity;
    const clima = data.weather[0].main;
    const Tiempo = data.weather[0].description;
    const lat = data.coord.lat;
    const lng = data.coord.lon;
    const climax = Clima.GetClima(lat, lng);
    //console.log(climax);
    //return climax;
    return {
        Ciudad,
        Pais,
        lat,
        lng,
        Temperatura,
        Temp_min,
        Temp_max,
        humedad,
        clima,
        Tiempo
    };
};


module.exports = {
    traerLugar
};