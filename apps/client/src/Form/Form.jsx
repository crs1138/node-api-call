import React from 'react'

const Form = ({ onSignChange, onDayChange }) => {
    return (
        <form id="info">
            <fieldset>
                <legend>Your info</legend>
                <select
                    name="your-sign"
                    id="your-sign"
                    className="form-select mb-3"
                    onChange={onSignChange}
                >
                    <option value="">-- Select your sign --</option>
                    <option value="aries">Aries</option>
                    <option value="taurus">Taurus</option>
                    <option value="gemini">Gemini</option>
                    <option value="cancer">Cancer</option>
                    <option value="leo">Leo</option>
                    <option value="virgo">Virgo</option>
                    <option value="libra">Libra</option>
                    <option value="scorpio">Scorpio</option>
                    <option value="sagittarius">Sagittarius</option>
                    <option value="capricorn">Capricorn</option>
                    <option value="aquarius">Aquarius</option>
                    <option value="pisces">Pisces</option>
                </select>
                <select
                    name="day"
                    id="day"
                    className="form-select mb-3"
                    onChange={onDayChange}
                >
                    <option value="">
                        -- Select day for your horoscope --
                    </option>
                    <option value="yesterday">Yesterday</option>
                    <option value="today">Today</option>
                    <option value="tomorrow">Tomorrow</option>
                </select>
            </fieldset>
        </form>
    )
}

export default Form
