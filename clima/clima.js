const axios = require('axios');

const GetClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=80c333941d2be7493ff52cd9998283fb&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    GetClima
}