# Asteroid Patrol
### Deployed Link - [Asteroid Patrol](https://asteroids-blond.vercel.app/)

## About
Living on earth, it’s difficult to know what’s flying around us in space. Using a NASA API, Asteroid Patrol makes information on nearby asteroids readily available. Users will be informed on diameter of the asteroid, miss distance (distance from earth), velocity of the asteroid, and more! 

## Contributor
- [Megan Crotteau](https://github.com/crotteau)

## Preview
![HomePage](https://github.com/crotteau/asteroids/assets/149750476/5031009c-2e8a-4b99-9a8d-c8159b580d1b)

## Technologies Used
<div>
  <img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' alt='javascript'/>
  <img src='https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white' alt='html'/>
  <img src='https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black' alt='react'/>
  <img src='https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white' alt='react-router'/>
  <img src='https://img.shields.io/badge/Cypress-69D3A7.svg?style=for-the-badge&logo=Cypress&logoColor=white' alt='cypress'/>
  <img src='https://img.shields.io/badge/Lighthouse-F44B21.svg?style=for-the-badge&logo=Lighthouse&logoColor=white' alt='lighthouse'/>
</div>

## Local Use
If you are cloning this to your computer, you'll need an API key. Requesting one is quick and easy! You can do so [here](https://api.nasa.gov/). Once you receive your API key (it should be instant), then go to the apiCalls.js file and replace `${process.env.REACT_APP_NASA_API_KEY}` with your key.

## Cypress Testing
I used Cypress to implement E2E testing for this app. To run the tests:
- `git clone` this [repo](https://github.com/crotteau/asteroids)
- `cd` into the directory
- `npm i` to install dependencies
- `npm start` and open http://localhost:3000 in your browser
- `npm run cypress:open` will start Cypress and open up test window
- click `E2E testing`
- when finished, `ctrl + c` to stop running local server
  
## Background
The goal of this project was to showcase my knowledge of React, Router, Asynchrounous JavaScript, and E2E testing with Cypress. I'm currently 5 months in to a front end program at Turing's School of Software and design and spent ~40hrs over the past week creating this project. 

## Challenges and Wins
A major win for this project was feeling capable in creating a React App using async JavaScript from start to finish. I also enjoyed the freedom to explore any concept and implement it how I saw fit, and despite this being a final project, I still learned a lot more along the way. When I reached my MVP, I continued exploring new React libaries and CSS animations to enhance my project. There was a lot of troubleshooting involved with these new features, but I'm happy with the final product and am excited to continue building upon it.

## Future Directions 
- Update all asteroids display for improved readibility and accessibility
- Implement additional sort and filter features to all asteroids display: sort by size and filter by if it is hazardous
- Refactor code for enhanced performance and loading 
- Enhance CSS styling for mobile devices
