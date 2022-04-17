const path = require('path')
const express = require('express')
require('dotenv').config()
const HoroscopeAPI = require('./utils/astrology')

// Create the app
const app = express()

// Add json parsing middleware
app.use(express.json())

// Setup static directory to serve
app.use(express.static(path.resolve(__dirname, '..', '../client/build')))

// Response to the POST request made by submitting the app's form
app.post('/api/horoscope', async (request, response) => {
    const { sign, day } = request.body
    if (!sign || !day) {
        return response.status(404).send({
            error: 'Please provide all details',
        })
    }

    try {
        const horoscope = await HoroscopeAPI.fetchHoroscope(sign, day)

        const { data } = horoscope
        return response.json({ data })
    } catch (err) {
        console.error(err)
        return response.status(500).json({
            error: 'Something went wrong on the server side',
        })
    }
})

// Create base URL route "/" and render index view
app.get('*', (request, response) => {
    response.sendFile(
        path.resolve(__dirname, '..', '../client/build/index.html')
    )
})

// Initialize application port
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
