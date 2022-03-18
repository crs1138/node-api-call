const path = require('path')
const express = require('express')
const hbs = require('hbs')
require('dotenv').config()
const HoroscopeAPI = require('./astrology')

const asyncApiCall = async () => {
        const response = await HoroscopeAPI.getHoroscope('gemini', 'today')

        console.log(response.data)
}

asyncApiCall()
