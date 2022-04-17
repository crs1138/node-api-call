import React, { useState, useEffect, useCallback, createContext } from 'react'
import Horoscope from '../Horoscope/Horoscope'
import Form from '../Form/Form'
const App = () => {
    const [sign, setSign] = useState('')
    const [day, setDay] = useState('')
    const [horoscope, setHoroscope] = useState({
        description: 'Select your sign and day to see your horoscope.',
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleSignChange = (eve) => {
        const { value: newSign } = eve.target
        setSign(newSign)
    }

    const handleDayChange = (eve) => {
        const { value: newDay } = eve.target
        setDay(newDay)
    }

    const fetchData = useCallback(() => {
        if (!!sign && !!day) {
            setIsLoading(true)
            fetch('/api/horoscope', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sign,
                    day,
                }),
            })
                .then((response) => response.json())
                .then((response) => {
                    const { data } = response
                    !!data && setHoroscope(data)
                    setIsLoading(false)
                })
        }
    }, [sign, day])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div className="container">
            <header className="row">
                <h1 className="col">Horoscope React App</h1>
            </header>
            <div className="row">
                <div className="col-md-6">
                    <Form
                        onSignChange={handleSignChange}
                        onDayChange={handleDayChange}
                    />
                </div>
                <div className="col-md-5">
                    <Horoscope
                        sign={sign}
                        day={day}
                        isLoading={isLoading}
                        horoscope={horoscope}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
