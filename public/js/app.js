const info = document.querySelector('#info')
const yourSignInput = document.querySelector('#your-sign')
const dayInput = document.querySelector('#day')
const results = document.querySelector('#results')

info.addEventListener('submit', (eve) => {
    eve.preventDefault()

    const yourSign = yourSignInput.value
    const yourDay = dayInput.value

    results.textContent = 'Loading…'

    const data = {
        sign: yourSign,
        day: yourDay,
    }

    fetch('/horoscope', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            console.log({ response })
            const { data } = response
            results.textContent = data.description
        })
        .catch((err) => {
            results.textContent = err
        })
})
