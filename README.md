[![Build Status](https://travis-ci.org/brendastorer/travel-app.svg?branch=master)](https://travis-ci.org/brendastorer/travel-app)

# HELE travel planner & diary

HELE is a Node/Express app where you can log the details of upcoming travel to share with others, and then optionally use that log as a travel diary during your trip.

![alt text](https://vast-brook-44418.herokuapp.com/images/trip-list.jpg "Screenshot of a list of trips")

![alt text](https://vast-brook-44418.herokuapp.com/images/trip-page.jpg "Screenshot of an individual trip")


## Setup

* Clone the repo from GitHub
* Run `npm install`
* Start a local server by running `npm run start-server` in your terminal
* In a different terminal window, run a mongo instance with `mongod`

To host on heroku, you must include a Procfile at the root of the app.

## Tests
* Run the test suite locally with `npm test`

## Sass Architecture

  **Base** is the first imported , and where global variables and mixins should be placed.

  **Defaults** are base styles on html elements.

  **Components** are specific patterns of modular styles for features across the site.  

## Technologies and Libraries

* Node.js/Express/Mongo
* Mongoose
* Travis CI
* Mocha & Chai
* jQuery
* Handlebars
* Passport.js
* Moment.js
* Gulp
* Sass/SCSS
* Babel
* Autoprefixer

## Upcoming Features

Product features and development are managed through this [Trello board](https://trello.com/b/9sS31quu/travel-app)