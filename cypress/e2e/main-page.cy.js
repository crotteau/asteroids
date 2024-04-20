describe('loading the main page', () => {
  beforeEach(() => {
    const apiKey = Cypress.env('REACT_APP_NASA_API_KEY')
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const date = `${year}-0${month}-${day}`

    cy.readFile("cypress/fixtures/asteroidsData17.json").then((data) => {
      const dateToDelete = '2024-04-19'
      data.near_earth_objects[date] = data.near_earth_objects[dateToDelete];
      delete data.near_earth_objects[dateToDelete];
      data.near_earth_objects[date] = [
        {
          "id": "54265872",
          "name": "(2022 FF2)",
          "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54265872",
          "estimated_diameter": {
              "feet": {
              "estimated_diameter_min": 193.4372136647,
              "estimated_diameter_max": 432.5387591324
            }
          },
          "is_potentially_hazardous_asteroid": false,
          "close_approach_data": [
            {
              "close_approach_date": "2024-04-13",
              "close_approach_date_full": "2024-Apr-13 07:17",
              "relative_velocity": {
                "miles_per_hour": "20759.5730157494"
              },
              "miss_distance": {
                "miles": "27931105.655582045"
              },
            }
          ]
        },
        { "id": "54276986",
          "name": "(2022 HT3)",
          "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54276986",
          "estimated_diameter": {
            "feet": {
              "estimated_diameter_min": 611.7021794171,
              "estimated_diameter_max": 1367.8076551614
            }
          },
          "is_potentially_hazardous_asteroid": false,
          "close_approach_data": [
            {
              "close_approach_date": "2024-04-13",
              "close_approach_date_full": "2024-Apr-13 21:56",
              "relative_velocity": {
                "miles_per_hour": "35225.0427023884"
              },
              "miss_distance": {
                "miles": "41024479.834716475"
              }
            }
          ]
        }
      ]

      cy.writeFile("cypress/fixtures/asteroidsData17.json", JSON.stringify(data));
    });


    cy.intercept('GET', `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`, {
      statusCode: 200,
      fixture: "dailyPhoto.json",
      timeout: 10000
    }).as('getPhoto')
    cy.intercept('GET', `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${apiKey}`, {
      statusCode: 200,
      fixture: "asteroidsData17.json",
      timeout: 10000
    }).as('getAsteroids')
    cy.visit('http://localhost:3000/')
    cy.wait('@getPhoto')
    cy.wait('@getAsteroids')
  })

  it('passes', () => {

  })
})
