
async function getPhoto() {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
    if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`)
    }
    const photo = await response.json()
    console.log(photo)
    return photo
}

async function getAsteroids(date) {
    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
    if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`)
    }
    console.log('fetching!!!!!!')
    const asteroids = await response.json()
    return asteroids
}


export {
    getPhoto,
    getAsteroids
}