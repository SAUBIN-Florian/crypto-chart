# Project 2022 Cryptanalyze.

With this project, right after had learn Redux, I started the app with a goal, centralize all the data i fetch from a free API (https://www.coingecko.com/).

Each components of the application share data about crypto-currency and markets, and you will find real-time informations about it.

## Project's state: 

I have to implement responsive design for mobile device, and add new functionality..

## Technologies

  - React
  - Redux
  - Chart JS
  - CoinGecko API

### Global

Each component of this application make is own AJAX request to CoinGecko API and store a parsed data into the redux store, the API block requests at 50 per minute, so I limited it to 1 call by component and avoid an IP address restriction for users...

All Charts are dynamically rendered in relation with the data inside the Redux store,
I also guard close bad request with parsed empty data to avoid breaking components with a bad request.