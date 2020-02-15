# darksky               [![CircleCI](https://circleci.com/gh/dnuwa/darksky/tree/develop.svg?style=svg)](https://circleci.com/gh/Snow-Media-Technologies/filmo-backend/tree/develop)              [![Coverage Status](https://coveralls.io/repos/github/dnuwa/darksky/badge.svg?branch=develop)](https://coveralls.io/github/dnuwa/darksky?branch=develop)
A simple web app that displays the prevailing weather condition(s) at the current location using the Dark Sky API. Determine and display the main weather right now in your location. 

## Todo before running the application
- Install and Use google chrome
- Install a chrome extension to fix Access-Control-Allow-Origin error that the darksky api returns.
#### Recommended chrome extensions to use (choose one)
- [Allow CORS: Access-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en)
- [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en)

Below is the error that the api returns if no extension is used

```` has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled. ````

## How to run the application
- git clone `https://github.com/dnuwa/darksky.git`
- Run the command `npm run install`
- A web page will load in the browser
- Enter the longitude and latitude of the location whose weather you would want to checkout. for example enter these values for Longitude and Latitude and Longitude respectively `0.347596` and `32.582520`
- Upon clicking on the get weather button, you should be able to see the tempreture, a weather icon and a text description of the current weather

## How to run the application tests
- while in the terminal, stop the server and run the command `npm run test`

## Viewing the test coverage report locally
- run the command `npm run coverage`


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Hosted here](https://eager-carson-8c2567.netlify.app/)

![app image](https://raw.githubusercontent.com/dnuwa/darksky/develop/screencapture-eager-carson-8c2567-netlify-app-2020-06-17-13_31_04.png)

