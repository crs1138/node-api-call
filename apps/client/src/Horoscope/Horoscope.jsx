import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Horoscope = ({ isLoading, sign, horoscope }) => {
    const { current_date, mood, description, lucky_number, lucky_time } =
        horoscope
    return (
        <>
            <h2>Your horoscope</h2>
            {!!sign && <p>Sign: {sign}</p>}
            {!!current_date && (
                <p>{isLoading ? <Skeleton /> : `Date: ${current_date}`}</p>
            )}
            <p>{isLoading ? <Skeleton count={4} /> : description}</p>
            {!!mood && <p>{isLoading ? <Skeleton /> : `Your mood: ${mood}`}</p>}
            {!!lucky_number && (
                <p>
                    {isLoading ? (
                        <Skeleton />
                    ) : (
                        `Your lucky number: ${lucky_number}`
                    )}
                </p>
            )}
            {!!lucky_time && (
                <p>
                    {isLoading ? (
                        <Skeleton />
                    ) : (
                        `Your lucky time: ${lucky_time}`
                    )}
                </p>
            )}
        </>
    )
}

// Horoscope.propTypes = {
//     sign,
//     horoscope,
//     isLoading,
// }

export default Horoscope
