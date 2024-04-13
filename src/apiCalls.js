
async function getPhoto() {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
    if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`)
    }
    const photo = await response.json()
    return photo
}

async function getAsteroids(start, end) {
    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
    if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`)
    }
    const asteroids = await response.json()
    console.log('asteroids', asteroids)
    return asteroids
}

export {
    getPhoto,
    getAsteroids
}