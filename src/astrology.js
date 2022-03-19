const axios = require('axios')
const BASE_URL = `https://sameer-kumar-aztro-v1.p.rapidapi.com/`
console.log(process.env)
options = {
        method: 'POST',
        url: BASE_URL,
        params: { sign: 'gemini', day: 'today' },
        headers: {
                'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
                'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        },
}

// axios.request(options)
//         .then((response) => {
//                 console.log(response.data)
//         })
//         .catch((error) => {
//                 console.error(error)
//         })
module.exports = {
        getHoroscope: (sign, day) => axios(options),
}
