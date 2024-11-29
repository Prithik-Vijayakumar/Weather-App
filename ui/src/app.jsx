// Access API key from the server's globally exposed variable
const weatherApiKey = window.KEY.API_KEY;

function WeatherApp() {
    const [city, setCity] = React.useState(''); // Stores user input for city
    const [weather, setWeather] = React.useState(null); // Stores fetched weather data
    const [error, setError] = React.useState(''); // Stores error messages
    const [isVisible, setIsVisible] = React.useState(true); // Controls visibility of weather display
    const [isLandingVisible, setIsLandingVisible] = React.useState(false); // Controls visibility of landing page
    const [isWeatherInputVisible, setIsWeatherInputVisible] = React.useState(false); // Controls visibility of weather input
    const [weatherInputAnimation, setWeatherInputAnimation] = React.useState(false); // Handles animation state for weather input
    const [isLoading, setIsLoading] = React.useState(true); // Indicates if weather data is still loading
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

      React.useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    // useEffect hook to manage the initial visibility and loading state after a delay
    React.useEffect(() => {
            setTimeout(() => {setIsLoading(false); setIsLandingVisible(true)}, 2000);   // Set loading state to false after 2 seconds 
    }, []);

    // Updates the city input state when the user types
    const handleCityChange = (e) => {
        setCity(e.target.value); // Sets the city based on user input
    };

    // Converts timestamp to 12-hour format based on timezone offset
    const convertTo12HourFormat = (timestamp, timezoneOffset) => {
        const localTime = new Date((timestamp + timezoneOffset) * 1000); // Adjust timestamp to local time
        let hours = localTime.getUTCHours();  // Get UTC hours
        const minutes = localTime.getUTCMinutes(); // Get UTC minutes
        const ampm = hours >= 12 ? "PM" : "AM";  // Determine AM or PM
        hours = hours % 12 || 12;  // Convert 0 hours to 12 for 12-hour format
        return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`; // Returns formatted time
    }

    // Fetches weather data when the form is submitted
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (!city.trim()) {
            setError('Please enter a valid city name.'); // Sets error if city is empty
            return;
        }
        setError(''); // Clear any previous error
        try {
            // Construct the API URL for fetching weather data
            const apiUrl = `${window.ENV.API_URL}?q=${city}&appid=${weatherApiKey}&units=metric`;
            const response = await fetch(apiUrl);

            // Handle unsuccessful response
            if (!response.ok) throw new Error('City not found');
            
            const data = await response.json(); // Parse the response as JSON
            // Prepare weather data object
            const weatherData = {
                name: data.name,
                temperature: parseFloat(data.main.temp.toFixed(1)),
                description: data.weather[0].description
                    .split(' ')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' '),
                icon: data.weather[0].icon,
                feels: parseFloat(data.main.feels_like.toFixed(1)),
                maxTemp: parseFloat(data.main.temp_max.toFixed(1)),
                minTemp: parseFloat(data.main.temp_min.toFixed(1)),
                wind: parseFloat(data.wind.speed.toFixed(1)),
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                time: convertTo12HourFormat(data.dt, data.timezone),
                date: new Date(new Date(data.dt * 1000).getTime() + data.timezone * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            };

            inputWeather(weatherData); // Send data to GraphQL
            setIsVisible(true); // Show weather display
            setIsLandingVisible(false); // Hide landing page
            setIsWeatherInputVisible(false); // Hide weather input form
            setIsLoading(true) // Set loading state
            setTimeout(() => {setIsLoading(false);}, 2000); // Set loading state to false after 2 seconds
        } catch (err) {
            setError(err.message); // Display error message
            setWeather(null); // Clear weather data on error
            if (isVisible) {
                setIsVisible(true);
            } else if (isLandingVisible) {
                setIsLandingVisible(true);
            }
            loadWeatherData();
        }
        setCity(''); // Reset city input
    };

    // Fetches initial weather data from the GraphQL server
    async function loadWeatherData() {
        const query = `
            query {
                weatherDetail {
                    name
                    temperature
                    description
                    icon
                    feels
                    maxTemp
                    minTemp
                    wind
                    humidity
                    pressure
                    time
                    date
                }
            }
        `;
        const data = await graphQLFetch(query); // Fetch weather data from server
        if (data) {
            // Get the last weather object in the array
            const weatherData = data.weatherDetail[data.weatherDetail.length - 1];
            setWeather({
                name: weatherData.name,
                temperature: weatherData.temperature,
                description: weatherData.description,
                icon: weatherData.icon,
                feels: weatherData.feels,
                maxTemp: weatherData.maxTemp,
                minTemp: weatherData.minTemp,
                time: weatherData.time,
                date: weatherData.date,
                wind: weatherData.wind,
                humidity: weatherData.humidity,
                pressure: weatherData.pressure
            });
        }
    }

    // Sends new weather data to the GraphQL server
    const inputWeather = async (weatherData) => {
        const query = `mutation ($weather: WeatherInputs!) {
            addWeather(weather: $weather) {
                name
                temperature
                description
                icon
                feels
                maxTemp
                minTemp
                wind
                humidity
                pressure
                time
                date
            }
        }`;

        const variables = { weather: weatherData };

        const data = await graphQLFetch(query, variables); // Send weather data to server
        if (data) {
            loadWeatherData(); // Refresh weather data after adding new data
        }
    };

    // Fetches initial data when the component is mounted and every 3 minutes
    React.useEffect(() => {
        loadWeatherData(); // Initial data load on mount
    }, [300000]);

    return (
        <div>
            {isLoading && <Loading />} {/* Displays loading spinner while fetching data */}
            {/* Form to input city name */}
            {isWeatherInputVisible && <LocationForm
                city={city}
                handleCityChange={handleCityChange}
                handleSubmit={handleSubmit}
                setIsWeatherInputVisible={setIsWeatherInputVisible}
                error={error}
                weatherInputAnimation={weatherInputAnimation}
                setWeatherInputAnimation={setWeatherInputAnimation}
                windowWidth={windowWidth}
            />}
            {/* Display weather information if available */}
            {weather && isVisible && <WeatherDisplay 
                weather={weather} 
                setIsWeatherInputVisible={setIsWeatherInputVisible} 
                setWeatherInputAnimation={setWeatherInputAnimation} 
                windowWidth={windowWidth} 
            />}
            {isLandingVisible && !weather && <LandingPage 
                setIsWeatherInputVisible={setIsWeatherInputVisible} 
                setWeatherInputAnimation={setWeatherInputAnimation} 
                windowWidth={windowWidth} 
            />}
        </div>
    );
}

// Helper function to send GraphQL queries and handle errors
async function graphQLFetch(query, variables) {
    try {
        const response = await fetch(window.GRAPHQL.GRAPHQL_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, variables }), // Sends the query and variables as JSON
        });
        const result = await response.json(); // Parse response to JSON

        if (result.errors) {
            const error = result.errors[0];
            if (error.extensions.code === 'BAD_USER_INPUT') {
                const details = error.extensions.errors;
                alert(`${error.message}:\n ${details}`); // Inform user of specific error
            } else {
                alert(`${error.extensions.code}: ${error.message}`); // Generic error message
            }
        }
        return result.data; // Return fetched data
    } catch (e) {
        alert(`Error in sending data to server: ${e.message}`); // Handle fetch error
    }
}

// Loading component that displays a loading image while the app fetches data
function Loading() {
    return (
        <div className="loading-container">
            <img src="https://avatars.githubusercontent.com/u/1743227?s=280&v=4" alt="OpenWeatherMap" className="openweathermap-loading-logo" />
        </div>
    );
}

// Form component for city input, allows the user to search for weather based on city
function LocationForm({ city, handleCityChange, handleSubmit, setIsWeatherInputVisible, error, weatherInputAnimation, setWeatherInputAnimation, windowWidth }) {

    const iconSize = (width) => {
        if (width <= 768 && width >= 400) {
            return "17px"
        } else if (width <= 1000 && width >= 768) {
            return "21px"
        } else if (width <= 1520 && width >= 1000) {
            return "25px"   
        } else if (width >= 1520) {
            return "34px"
        }
    }

    return (
        <React.Fragment>
            {/* The form with dynamic animation based on the weatherInputAnimation state */}
            <form onSubmit= {handleSubmit}  className={`location-form ${weatherInputAnimation ? 'slidedown' : 'slideup'}`}>
                {/* OpenWeatherMap logo */}
                <img src="https://avatars.githubusercontent.com/u/1743227?s=280&v=4" alt="OpenWeatherMap" className="openweathermap-location-logo" />
                <div className="form-content-container">
                    {/* Form input title with an error message if present */}
                    <p className="form-input-title">Enter City {error && <span className="error-message">({error})</span>}</p>
                    {/* Input field for entering city name */}
                    <input
                        type="text"
                        value={city}
                        onChange={handleCityChange}
                        placeholder="Eg. London"
                        className={`location-input ${error ? 'error' : ''}`}
                    />
                    <div className="button-container">
                        {/* Submit button for searching weather */}
                        <button type="submit" className="search-button" >
                            <p className="search-button-text">Search</p>
                            {/* Search icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" height={iconSize(windowWidth)} viewBox="0 -960 960 960" width={iconSize(windowWidth)} fill="whitesmoke">
                                <path d="M465.33-80.67Q385-83.33 314.67-115.83q-70.34-32.5-122.34-86.17t-82.16-125.18Q80-398.69 80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q148 0 257.83 93.17Q847.67-693.67 873.33-553h-68q-17.66-80.33-70.16-143.5t-130.5-94.83V-774q0 34.33-23.84 59.5-23.83 25.17-58.16 25.17H438v84.66q0 16.72-12.83 28.03-12.84 11.31-29.84 11.31h-82V-480h100v123.33h-58l-200-200q-4.33 19.34-6.5 38.45-2.16 19.11-2.16 38.22 0 133.67 91.33 230.33Q329.33-153 465.33-147.33v66.66Zm382.67-24-132-132q-21 14-45.33 22-24.34 8-50.38 8-72.34 0-122.98-50.58-50.64-50.57-50.64-122.83 0-72.25 50.58-122.75 50.57-50.5 122.83-50.5 72.25 0 122.75 50.64t50.5 122.98q0 26.04-8.33 50.38-8.33 24.33-21.67 46l132 131.33L848-104.67ZM619.91-273.33q44.76 0 75.76-30.91 31-30.91 31-75.67 0-44.76-30.91-75.76-30.91-31-75.67-31-44.76 0-75.76 30.91-31 30.91-31 75.67 0 44.76 30.91 75.76 30.91 31 75.67 31Z"/>
                            </svg>
                        </button>
                        {/* Cancel button to hide the input form */}
                        <button type= "button" onClick={() => {setTimeout(() => setIsWeatherInputVisible(false), 1000); setWeatherInputAnimation(false)}} className="cancel-button">
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
}


// Component to display weather details
function WeatherDisplay({ weather, setIsWeatherInputVisible, setWeatherInputAnimation, windowWidth }) {

    // Function to return the corresponding weather icon based on the weather condition
    const weatherIcon = (icon) => {
        if (icon === "01d" || icon === "01n") {
            return 'https://cdn4.iconfinder.com/data/icons/weatherful/72/Sunny-512.png'; // Sunny icon
        } else if (icon === "02d" || icon === "02n") {
            return 'https://cdn4.iconfinder.com/data/icons/weatherful/72/Cloudy_Sunny-512.png'; // Cloudy with sun icon
        } else if (icon === "03d" || icon === "03n") {
            return 'https://cdn4.iconfinder.com/data/icons/weatherful/72/Cloudy-256.png'; // Cloudy icon
        } else if (icon === "04d" || icon === "04n") {
            return 'https://cdn4.iconfinder.com/data/icons/weatherful/72/Foggy_Cloud-256.png'; // Foggy icon
        } else if (icon === "09d" || icon === "09n") {
            return 'https://cdn4.iconfinder.com/data/icons/weatherful/72/Raining-256.png'; // Rainy icon
        } else if (icon === "10d" || icon === "10n") {
            return 'https://cdn4.iconfinder.com/data/icons/weatherful/72/Raining_Sun-256.png'; // Rainy with sun icon
        } else if (icon === "11d" || icon === "11n") {
            return 'https://cdn4.iconfinder.com/data/icons/weatherful/72/Lightning_Cloudy-256.png'; // Lightning icon
        } else if (icon === "13d" || icon === "13n") {
            return 'https://cdn4.iconfinder.com/data/icons/weatherful/72/Snowy-256.png'; // Snowy icon
        } else if (icon === "50d" || icon === "50n") {
            return 'https://cdn4.iconfinder.com/data/icons/weatherful/72/Foggy-256.png'; // Foggy icon
        } else {
            return ''; // Return a default or empty string if no match
        }
    };
    

    // Function to determine the background gradient based on the time of day
    const bgGradient = (fetchedTime) => {
        const timeString = fetchedTime;
        let [time, modifier] = timeString.split(" "); // Split into time and AM/PM
        let [hour, minutes] = time.split(":").map(Number); // Split into hours and minutes

        // Convert to 24-hour format
        if (modifier === "PM" && hour !== 12) {
        hour += 12;
        } else if (modifier === "AM" && hour === 12) {
        hour = 0;
        }
        if (hour >= 6 && hour < 12) {
          // Morning gradient
          return "linear-gradient(to bottom, #FFEDD5, #FFD1DC)";
        } else if (hour >= 12 && hour < 17) {
          // Afternoon gradient
          return "linear-gradient(to bottom, #A1D6E2, #FFFACD)";
        } else if (hour >= 17 && hour < 20) {
          // Evening gradient
          return "linear-gradient(to bottom, #E9D8FD, #FBC4AB)";
        } else {
          // Night gradient
          return "linear-gradient(to bottom, #2A2D43, #495867)";
        }
      };

    // Another function to determine a different gradient based on time of day
    const getGradient = (fetchedTime) => {
        const timeString = fetchedTime;
        let [time, modifier] = timeString.split(" "); // Split into time and AM/PM
        let [hour, minutes] = time.split(":").map(Number); // Split into hours and minutes

        // Convert to 24-hour format
        if (modifier === "PM" && hour !== 12) {
        hour += 12;
        } else if (modifier === "AM" && hour === 12) {
        hour = 0;
        }
        if (hour >= 6 && hour < 12) {
            // Morning gradient
            return "linear-gradient(45deg, #FFEDD5, #FFD1DC)";
        } else if (hour >= 12 && hour < 17) {
            // Afternoon gradient
            return "linear-gradient(45deg, #A1D6E2, #FFFACD)";
        } else if (hour >= 17 && hour < 20) {
            // Evening gradient
            return "linear-gradient(45deg, #E9D8FD, #FBC4AB)";
        } else {
            // Night gradient
            return "linear-gradient(45deg, #495867, #B0B3A9, #B0B3A6, #2A2D43)";
        } 
      };

    const iconSize = (width) => {
        if (width <= 768 && width >= 400) {
            return "15px"
        } else if (width <= 1000 && width >= 768) {
            return "19px"
        } else if (width <= 1520 && width >= 1000) {
            return "22.5px"   
        } else if (width >= 1520) {
            return "30px"
        }
    }



    return (
        <React.Fragment>
            <div className="weather-container"
                style={{ background: bgGradient(weather.time), transition: "background 0.5s ease" }}
            >
                {/* Button to add a new city, triggers weather input visibility */}
                <button className="add-new-city-button" onClick={() => {setIsWeatherInputVisible(true); setWeatherInputAnimation(true);}} style={{ background: getGradient(weather.time), transition: "background 0.5s ease" }}>
                    <p className="add-new-city-text">New City</p>
                    {/* SVG icon for "add new city" */}
                    <svg xmlns="http://www.w3.org/2000/svg" height = {iconSize(windowWidth)} viewBox="0 -960 960 960" width = {iconSize(windowWidth)} fill="black">
                        <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z"/>
                    </svg>
                </button>
                <div className="city-date-container">
                    {/* Display the city name and date/time */}
                    <p className="city-name">{weather.name}</p>
                    <p className="date-time">Today, {weather.date} {weather.time}</p>
                </div>
                <div className="weather-details-container">
                    {/* Display temperature and description */}
                    <h2 className="temperature">{weather.temperature}°</h2>
                    <div className="description-container">
                        <p className="description">{weather.description}</p>
                        <p className="temp-range">{weather.maxTemp}° | {weather.minTemp}°</p>
                    </div>  
                </div>
                <div className="weather-icon-container">
                    {/* Display the weather icon based on the icon code */}
                    <img
                        src={weatherIcon(weather.icon)}
                        alt="weather icon"
                        className="weather-icon"
                    />
                </div>
                <div className="more-weather-details-container"
                    style={{ background: getGradient(weather.time), transition: "background 0.5s ease" }}
                >
                    <h2 className="details-title">Weather now</h2>
                    <div className="details-grid">
                        {/* Display additional weather details like feels, wind, humidity, and pressure */}
                        <div className="detail">
                            <i className="fa-solid fa-temperature-three-quarters detail-icon"></i>
                            <div className="detail-text">
                                <p className="detail-category">Feel like</p>
                                <p className="detail-value">{weather.feels}°</p>
                            </div>
                        </div>
                        <div className="detail">
                            <i className="fa-solid fa-wind detail-icon"></i>
                            <div className="detail-text">
                                <p className="detail-category">Wind</p>
                                <p className="detail-value">{weather.wind} m/s</p>
                            </div>
                        </div>
                        <div className="detail">
                            <i className="fa-solid fa-droplet detail-icon"></i>
                            <div className="detail-text">
                                <p className="detail-category">Humidity</p>
                                <p className="detail-value">{weather.humidity}%</p>
                            </div>
                        </div>
                        <div className="detail">
                            <i className="fa-solid fa-water detail-icon"></i>
                            <div className="detail-text">
                                <p className="detail-category">Pressure</p>
                                <p className="detail-value">{weather.pressure} hPa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

// LandingPage component displays the main page with weather-related information
function LandingPage({ setIsWeatherInputVisible, setWeatherInputAnimation, windowWidth }) {

    const iconSize = (width) => {
        if (width <= 768 && width >= 400) {
            return "17px"
        } else if (width <= 1000 && width >= 768) {
            return "21px"
        } else if (width <= 1520 && width >= 1000) {
            return "25px"   
        } else if (width >= 1520) {
            return "34px"
        }
    }

    return (
        <React.Fragment>
            <div className="landing-page">
                {/* Display animation icons of different weather conditions */}
                <span className="animation-icons">
                    {/* Icons representing scattered clouds */}
                    <img id="a1" src="https://cdn4.iconfinder.com/data/icons/weatherful/72/Cloudy-256.png" alt="scattered clouds" />
                    <img id="a2" src="https://cdn4.iconfinder.com/data/icons/weatherful/72/Cloudy-256.png" alt="scattered clouds" />
                    <img id="a3" src="https://cdn4.iconfinder.com/data/icons/weatherful/72/Cloudy-256.png" alt="scattered clouds" />
                    <img id="a4" src="https://cdn4.iconfinder.com/data/icons/weatherful/72/Cloudy-256.png" alt="scattered clouds" />
                    <img id="a5" src="https://cdn4.iconfinder.com/data/icons/weatherful/72/Cloudy-256.png" alt="scattered clouds" />
                    {/* Icon for the sun */}
                    <img id="sun" src="https://openweathermap.org/img/wn/01d@2x.png" alt="Sun" />
                </span>

                {/* Page title and description */}
                <h1 className="page-title">Welcome to the Weather App</h1>
                <p className="page-description">Get real-time weather updates for your city!</p>
                <p className="page-description">Shows Temperature, Wind, Humidity, and Pressure</p>

                {/* Button to toggle the visibility of the location search form */}
                <button className="location-form-button" onClick={() => {setIsWeatherInputVisible(true); setWeatherInputAnimation(true);}}>
                    <p className="location-form-button-text">Search City</p>
                    {/* Icon for the search button */}
                    <svg xmlns="http://www.w3.org/2000/svg" height={iconSize(windowWidth)} viewBox="0 -960 960 960" width={iconSize(windowWidth)} fill="beige">
                        <path d="M480.09-490q28.91 0 49.41-20.59 20.5-20.59 20.5-49.5t-20.59-49.41q-20.59-20.5-49.5-20.5t-49.41 20.59q-20.5 20.59-20.5 49.5t20.59 49.41q20.59 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/>
                    </svg>
                </button>

                {/* Credits for using OpenWeatherMap API */}
                <p className="page-credits">Powered by <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer" className="openweathermap-link"><img src="https://avatars.githubusercontent.com/u/1743227?s=280&v=4" alt="OpenWeatherMap" className="openweathermap-credits-logo" /> OpenWeatherMap</a> API</p>
            </div>
        </React.Fragment>
    );
}

// Render the WeatherApp component into the DOM
const element = <WeatherApp />;
// ReactDOM.render renders the component into the element with the ID 'contents'
ReactDOM.render(element, document.getElementById('contents'));

