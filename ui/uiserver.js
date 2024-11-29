const express = require('express'); // Import Express for server creation
require('dotenv').config(); // Load environment variables from a .env file

// Fallback values for environment variables, ensuring defaults if not defined
const API_KEY = process.env.WEATHER_API_KEY || '466bb92e273ec75e8f5329366820cefd';
const API_URL = process.env.WEATHER_API_URL || 'https://api.openweathermap.org/data/2.5/weather';
const ICON_URL = process.env.WEATHER_ICON_URL || 'http://openweathermap.org/img/wn';
const GRAPHQL_URL = process.env.WEATHER_GRAPHQL_URL || 'http://localhost:3000/graphql';

// Wrap configurations into objects for better organization
const apiKey = { API_KEY };
const apiUrl = { API_URL };
const iconUrl = { ICON_URL };
const graphqlUrl = { GRAPHQL_URL };        

const port = process.env.WEATHER_SERVER_PORT || 8000;

const app = express(); // Create an Express application

// Route to serve the API key as a JavaScript variable for the frontend
app.get('/apiKey', (req, res) => 
    res.send(`window.KEY = ${JSON.stringify(apiKey)}`)
);

// Route to serve the API URL as a JavaScript variable for the frontend
app.get('/apiUrl', (req, res) => 
    res.send(`window.ENV = ${JSON.stringify(apiUrl)}`)
);

// Route to serve the icon URL as a JavaScript variable for the frontend
app.get('/iconUrl', (req, res) => 
    res.send(`window.ICON = ${JSON.stringify(iconUrl)}`)
);

// Route to serve the GraphQL URL as a JavaScript variable for the frontend
app.get('/graphqlUrl', (req, res) => 
    res.send(`window.GRAPHQL = ${JSON.stringify(graphqlUrl)}`)
);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => 
    console.log(`UI Server started on ${port}`)
);
