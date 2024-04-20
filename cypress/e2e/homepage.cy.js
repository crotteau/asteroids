describe('navigating the main page', () => {
  beforeEach(() => {
    const apiKey = Cypress.env('REACT_APP_NASA_API_KEY')
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const date = `${year}-0${month}-${day}`

    cy.readFile("cypress/fixtures/asteroidsData17.json").then((data) => {
      data.near_earth_objects[date] = data.near_earth_objects['2024-04-19'];
      delete data.near_earth_objects['2024-04-19'];
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
        {
          "id": "54276986",
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

  it('Should load fetched data, headers, and navbar', () => {
    cy.get('.main-header').contains('ASTEROID PATROL')
    .get('.navbar').get('li').contains('APOD')
    .get('.navbar').get('li').contains('ASTEROIDS')
    .get('.daily-photo-info').get('h2').contains('Astronomy Picture of the Day ===>')
    .get('.daily-photo-info').get('.view-apod').contains('More Info')
    .get('.daily-photo-info').get('img')
    .get('.homepage-asteroids').get('h3').contains('Today\'s Asteroids (2 of 2)')
    .get('.homepage-asteroids').get('.view-asteroids').contains('View All')
    .get('.homepage-asteroids-container').children().should('have.length', 2)
    .get('.homepage-asteroids-container').children().first().contains('(2022 FF2)')
    .get('.homepage-asteroids-container').children().first().contains('Closest Approach Date: 2024-Apr-13 07:17')
    .get('.homepage-asteroids-container').children().first().contains('Missed Earth By: 27,931,105 miles')
    .get('.homepage-asteroids-container').children().first().contains('Potentially Hazardous: No, we\'re safe!')
    .get('.homepage-asteroids-container').children().last().contains('(2022 HT3)')
    .get('.homepage-asteroids-container').children().last().contains('Closest Approach Date: 2024-Apr-13 21:56')
    .get('.homepage-asteroids-container').children().last().contains('Missed Earth By: 41,024,479 miles')
    .get('.homepage-asteroids-container').children().last().contains('Potentially Hazardous: No, we\'re safe!')
  }),

  it('should allow you to click and view all asteroids and click back to main', () => {
    cy.get('.homepage-asteroids').get('.view-asteroids').contains('View All').click()
    .get('.all-asteroids-grid').children().should('have.length', 2)
    .get('.all-asteroids-grid').children().first().contains('(2022 FF2)')
    .get('.all-asteroids-grid').children().last().contains('(2022 HT3)')
    .get('.main-header').contains('ASTEROID PATROL').click()
    .get('.daily-photo-info').get('h2').contains('Astronomy Picture of the Day ===>')
    .get('.homepage-asteroids').get('h3').contains('Today\'s Asteroids (2 of 2)')
  }),

  it('should allow you to view more info on the APOD', () => {
    cy.get('.daily-photo-info').get('.view-apod').contains('More Info').click()
    .get('.apod-photo-info').get('h2').contains('Astronomy Picture of the Day')
    .get('.apod-photo-info').get('h3'). contains('Total Eclipse and Comets')
    .get('.apod-photo-info').get('.apod-photo-cite').contains('Lin Zixuan (Tsinghua U.)')
    .get('.apod-photo-info').get('.apod-photo-explanation').contains('Not one, but two comets appeared near the Sun during last week\'s total solar eclipse')
    .get('.apod-photo-info').get('.view-fullsize-apod').contains('View Fullsize Image')
    .get('.apod').get('img')
  })
})
