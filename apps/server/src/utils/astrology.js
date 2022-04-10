const axios = require('axios')
const BASE_URL = `https://sameer-kumar-aztro-v1.p.rapidapi.com/`

module.exports = {
    fetchHoroscope: (sign, day) => {
        const options = {
            method: 'POST',
            url: BASE_URL,
            params: { sign, day },
            headers: {
                'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
                'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            },
        }
        return axios(options)
    },
}
