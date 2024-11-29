const express = require('express'); // Import Express for creating the server
const { ApolloServer } = require('apollo-server-express'); // Import ApolloServer for GraphQL functionality
const fs = require('fs'); // Import FileSystem to read the GraphQL schema file
require('dotenv').config(); // Load environment variables from a .env file

const port = process.env.API_SERVER_PORT || 3000 // Default port for the server

// Mock in-memory data storage for weather information
const weatherInfo = [];

// Load GraphQL type definitions from the schema file
const typeDefs = fs.readFileSync('schema.graphql', 'utf-8');

// Define GraphQL resolvers for handling queries and mutations
const resolvers = {
    Query: {
        // Resolver for fetching all weather details
        weatherDetail,
    },
    Mutation: {
        // Resolver for adding a new weather entry
        addWeather,
    },
};

// Resolver function to fetch all weather details
async function weatherDetail() {
    return weatherInfo; // Return the in-memory weather data
}

// Resolver function to add new weather data
async function addWeather(_, { weather }) {
    weatherInfo.push(weather); // Add the new weather data to the in-memory array
    return weather; // Return the added weather data
}

// Function to initialize and start the server
async function startServer() {
    const app = express(); // Create an Express application

    // Create an Apollo Server instance with the schema and resolvers
    const server = new ApolloServer({ typeDefs, resolvers });

    // Start the Apollo Server
    await server.start();

    // Apply the Apollo Server middleware to the Express app
    server.applyMiddleware({ app, path: '/graphql' });

    // Start the Express server and log the port number
    app.listen(port, () => console.log(`API Server started on ${port}`));
}

// Start the server
startServer();
