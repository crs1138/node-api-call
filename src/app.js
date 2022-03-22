const path = require('path')
const express = require('express')
const hbs = require('hbs')
require('dotenv').config()
const HoroscopeAPI = require('./utils/astrology')

// Create the app
const app = express()

// Add json parsing middleware
app.use(express.json())

// Define paths for the HBS config
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(path.join(__dirname, '../public')))

// Create base URL route "/" and render index view
app.get('/', (request, response) => {
    response.render('index', {
        title: 'Horoscope',
    })
})

// Response to the POST request made by submitting the app's form
app.post('/horoscope', async (request, response) => {
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

// Catch all route, renders 404 page
app.get('*', (request, response) => {
    response.render('404', {
        search: 'page',
    })
})

// Initialize application port
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
