describe('all asteroids grid functionality and details view', () => {
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
    cy.intercept('GET', `https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-04-13&end_date=2024-04-13&api_key=${apiKey}`, {
      statusCode: 200,
      fixture: "asteroidData13.json",
      timeout: 10000
    }).as('getNewAsteroids')
    cy.visit('http://localhost:3000/asteroids')
    cy.wait('@getPhoto')
    cy.wait('@getAsteroids')
  })

  it('should load all asteroids and allow you to sort by closest to furthest asteroid', () => {
    cy.get('.all-asteroids-grid').children().should('have.length', 2)
      .get('.all-asteroids-grid').children().first().contains('(2022 FF2)')
      .get('.all-asteroids-grid').children().first().contains('Closest Approach Date: 2024-Apr-13 07:17')
      .get('.all-asteroids-grid').children().first().contains('Missed Earth By: 27,931,105 miles')
      .get('.all-asteroids-grid').children().first().contains('Potentially Hazardous: No, we\'re safe!')
      .get('.all-asteroids-grid').children().last().contains('(2022 HT3)')
      .get('.all-asteroids-grid').children().last().contains('Closest Approach Date: 2024-Apr-13 21:56')
      .get('.all-asteroids-grid').children().last().contains('Missed Earth By: 41,024,479 miles')
      .get('.all-asteroids-grid').children().last().contains('Potentially Hazardous: No, we\'re safe!')
      .get('select').select('Furthest to Closest')
      .get('.change-sort').click()
      .get('.all-asteroids-grid').children().first().contains('(2022 HT3)')
      .get('.all-asteroids-grid').children().first().contains('Missed Earth By: 41,024,479 miles')
      .get('.all-asteroids-grid').children().last().contains('(2022 FF2)')
      .get('.all-asteroids-grid').children().last().contains('Missed Earth By: 27,931,105 miles')
  }),

    it('should allow the user to select a previous date', () => {
      cy.get('input').type('2024-04-13')
        .get('.change-date-submit').click()
        .wait('@getNewAsteroids')
      cy.get('.all-asteroids-grid').children().should('have.length', 3)
        .get('.all-asteroids-grid').children().first().contains('(2009 HD)')
        .get('.all-asteroids-grid').children().first().contains('Closest Approach Date: 2024-Apr-13 15:38')
        .get('.all-asteroids-grid').children().first().contains('Missed Earth By: 7,459,899 miles')
        .get('.all-asteroids-grid').children().first().contains('Potentially Hazardous: No, we\'re safe!')
        .get('.all-asteroids-grid').children().last().contains('(2018 TD4)')
        .get('.all-asteroids-grid').children().last().contains('Closest Approach Date: 2024-Apr-13 15:59')
        .get('.all-asteroids-grid').children().last().contains('Missed Earth By: 30,432,883 miles')
        .get('.all-asteroids-grid').children().last().contains('Potentially Hazardous: No, we\'re safe!')
    }),

    it('should display details of the asteroid when clicked', () => {
      cy.get('.all-asteroids-grid').children().first().click()
        .get('.asteroid-details').get('h2').contains('Asteroid - (2022 FF2)')
        .get('.data-table').contains('Date of Closest Approach')
        .get('.data-table').contains('2024-Apr-13 07:17')
        .get('.data-table').contains('Missed Earth By')
        .get('.data-table').contains('27,931,105 miles')
        .get('.asteroid-size').contains('Just how large is this asteroid?')
        .get('.asteroid-size').contains('At its largest width, it has a diameter of 5 blue whales (~80ft each)')
        .get('.asteroid-size').children().should('have.length', 9)
        .get('.asteroid-size').get('p').get('a').contains('More info')
        .get('.asteroid-size').get('button')
    }),

    it('should navigate to the corresponding asteroid ID url and update when returning to asteroid grid', () => {
      cy.get('.all-asteroids-grid').children().first().click()
        .url().should('eq', 'http://localhost:3000/asteroids/54265872')
        .get('.asteroid-size').get('button').click()
        .get('.all-asteroids-grid').children().should('have.length', 2)
        .get('.all-asteroids-grid').children().first().contains('(2022 FF2)')
        .get('.all-asteroids-grid').children().last().contains('(2022 HT3)')
    })
})