"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Access API key from the server's globally exposed variable
var weatherApiKey = window.KEY.API_KEY;
function WeatherApp() {
  var _React$useState = React.useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    city = _React$useState2[0],
    setCity = _React$useState2[1]; // Stores user input for city
  var _React$useState3 = React.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    weather = _React$useState4[0],
    setWeather = _React$useState4[1]; // Stores fetched weather data
  var _React$useState5 = React.useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    error = _React$useState6[0],
    setError = _React$useState6[1]; // Stores error messages
  var _React$useState7 = React.useState(true),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    isVisible = _React$useState8[0],
    setIsVisible = _React$useState8[1]; // Controls visibility of weather display
  var _React$useState9 = React.useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    isLandingVisible = _React$useState10[0],
    setIsLandingVisible = _React$useState10[1]; // Controls visibility of landing page
  var _React$useState11 = React.useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    isWeatherInputVisible = _React$useState12[0],
    setIsWeatherInputVisible = _React$useState12[1]; // Controls visibility of weather input
  var _React$useState13 = React.useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    weatherInputAnimation = _React$useState14[0],
    setWeatherInputAnimation = _React$useState14[1]; // Handles animation state for weather input
  var _React$useState15 = React.useState(true),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    isLoading = _React$useState16[0],
    setIsLoading = _React$useState16[1]; // Indicates if weather data is still loading
  var _React$useState17 = React.useState(window.innerWidth),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    windowWidth = _React$useState18[0],
    setWindowWidth = _React$useState18[1];
  React.useEffect(function () {
    var handleResize = function handleResize() {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // useEffect hook to manage the initial visibility and loading state after a delay
  React.useEffect(function () {
    setTimeout(function () {
      setIsLoading(false);
      setIsLandingVisible(true);
    }, 2000); // Set loading state to false after 2 seconds 
  }, []);

  // Updates the city input state when the user types
  var handleCityChange = function handleCityChange(e) {
    setCity(e.target.value); // Sets the city based on user input
  };

  // Converts timestamp to 12-hour format based on timezone offset
  var convertTo12HourFormat = function convertTo12HourFormat(timestamp, timezoneOffset) {
    var localTime = new Date((timestamp + timezoneOffset) * 1000); // Adjust timestamp to local time
    var hours = localTime.getUTCHours(); // Get UTC hours
    var minutes = localTime.getUTCMinutes(); // Get UTC minutes
    var ampm = hours >= 12 ? "PM" : "AM"; // Determine AM or PM
    hours = hours % 12 || 12; // Convert 0 hours to 12 for 12-hour format
    return "".concat(hours, ":").concat(minutes.toString().padStart(2, "0"), " ").concat(ampm); // Returns formatted time
  };

  // Fetches weather data when the form is submitted
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var apiUrl, response, data, weatherData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault(); // Prevent default form submission behavior
            if (city.trim()) {
              _context.next = 4;
              break;
            }
            setError('Please enter a valid city name.'); // Sets error if city is empty
            return _context.abrupt("return");
          case 4:
            setError(''); // Clear any previous error
            _context.prev = 5;
            // Construct the API URL for fetching weather data
            apiUrl = "".concat(window.ENV.API_URL, "?q=").concat(city, "&appid=").concat(weatherApiKey, "&units=metric");
            _context.next = 9;
            return fetch(apiUrl);
          case 9:
            response = _context.sent;
            if (response.ok) {
              _context.next = 12;
              break;
            }
            throw new Error('City not found');
          case 12:
            _context.next = 14;
            return response.json();
          case 14:
            data = _context.sent;
            // Parse the response as JSON
            // Prepare weather data object
            weatherData = {
              name: data.name,
              temperature: parseFloat(data.main.temp.toFixed(1)),
              description: data.weather[0].description.split(' ').map(function (word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
              }).join(' '),
              icon: data.weather[0].icon,
              feels: parseFloat(data.main.feels_like.toFixed(1)),
              maxTemp: parseFloat(data.main.temp_max.toFixed(1)),
              minTemp: parseFloat(data.main.temp_min.toFixed(1)),
              wind: parseFloat(data.wind.speed.toFixed(1)),
              humidity: data.main.humidity,
              pressure: data.main.pressure,
              time: convertTo12HourFormat(data.dt, data.timezone),
              date: new Date(new Date(data.dt * 1000).getTime() + data.timezone * 1000).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
              })
            };
            inputWeather(weatherData); // Send data to GraphQL
            setIsVisible(true); // Show weather display
            setIsLandingVisible(false); // Hide landing page
            setIsWeatherInputVisible(false); // Hide weather input form
            setIsLoading(true); // Set loading state
            setTimeout(function () {
              setIsLoading(false);
            }, 2000); // Set loading state to false after 2 seconds
            _context.next = 30;
            break;
          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](5);
            setError(_context.t0.message); // Display error message
            setWeather(null); // Clear weather data on error
            if (isVisible) {
              setIsVisible(true);
            } else if (isLandingVisible) {
              setIsLandingVisible(true);
            }
            loadWeatherData();
          case 30:
            setCity(''); // Reset city input
          case 31:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 24]]);
    }));
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  // Fetches initial weather data from the GraphQL server
  function loadWeatherData() {
    return _loadWeatherData.apply(this, arguments);
  } // Sends new weather data to the GraphQL server
  function _loadWeatherData() {
    _loadWeatherData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var query, data, weatherData;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            query = "\n            query {\n                weatherDetail {\n                    name\n                    temperature\n                    description\n                    icon\n                    feels\n                    maxTemp\n                    minTemp\n                    wind\n                    humidity\n                    pressure\n                    time\n                    date\n                }\n            }\n        ";
            _context3.next = 3;
            return graphQLFetch(query);
          case 3:
            data = _context3.sent;
            // Fetch weather data from server
            if (data) {
              // Get the last weather object in the array
              weatherData = data.weatherDetail[data.weatherDetail.length - 1];
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
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _loadWeatherData.apply(this, arguments);
  }
  var inputWeather = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(weatherData) {
      var query, variables, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            query = "mutation ($weather: WeatherInputs!) {\n            addWeather(weather: $weather) {\n                name\n                temperature\n                description\n                icon\n                feels\n                maxTemp\n                minTemp\n                wind\n                humidity\n                pressure\n                time\n                date\n            }\n        }";
            variables = {
              weather: weatherData
            };
            _context2.next = 4;
            return graphQLFetch(query, variables);
          case 4:
            data = _context2.sent;
            // Send weather data to server
            if (data) {
              loadWeatherData(); // Refresh weather data after adding new data
            }
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function inputWeather(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  // Fetches initial data when the component is mounted and every 3 minutes
  React.useEffect(function () {
    loadWeatherData(); // Initial data load on mount
  }, [300000]);
  return /*#__PURE__*/React.createElement("div", null, isLoading && /*#__PURE__*/React.createElement(Loading, null), " ", isWeatherInputVisible && /*#__PURE__*/React.createElement(LocationForm, {
    city: city,
    handleCityChange: handleCityChange,
    handleSubmit: handleSubmit,
    setIsWeatherInputVisible: setIsWeatherInputVisible,
    error: error,
    weatherInputAnimation: weatherInputAnimation,
    setWeatherInputAnimation: setWeatherInputAnimation,
    windowWidth: windowWidth
  }), weather && isVisible && /*#__PURE__*/React.createElement(WeatherDisplay, {
    weather: weather,
    setIsWeatherInputVisible: setIsWeatherInputVisible,
    setWeatherInputAnimation: setWeatherInputAnimation,
    windowWidth: windowWidth
  }), isLandingVisible && !weather && /*#__PURE__*/React.createElement(LandingPage, {
    setIsWeatherInputVisible: setIsWeatherInputVisible,
    setWeatherInputAnimation: setWeatherInputAnimation,
    windowWidth: windowWidth
  }));
}

// Helper function to send GraphQL queries and handle errors
function graphQLFetch(_x3, _x4) {
  return _graphQLFetch.apply(this, arguments);
} // Loading component that displays a loading image while the app fetches data
function _graphQLFetch() {
  _graphQLFetch = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(query, variables) {
    var response, result, error, details;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return fetch(window.GRAPHQL.GRAPHQL_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              query: query,
              variables: variables
            }) // Sends the query and variables as JSON
          });
        case 3:
          response = _context4.sent;
          _context4.next = 6;
          return response.json();
        case 6:
          result = _context4.sent;
          // Parse response to JSON

          if (result.errors) {
            error = result.errors[0];
            if (error.extensions.code === 'BAD_USER_INPUT') {
              details = error.extensions.errors;
              alert("".concat(error.message, ":\n ").concat(details)); // Inform user of specific error
            } else {
              alert("".concat(error.extensions.code, ": ").concat(error.message)); // Generic error message
            }
          }
          return _context4.abrupt("return", result.data);
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          alert("Error in sending data to server: ".concat(_context4.t0.message)); // Handle fetch error
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return _graphQLFetch.apply(this, arguments);
}
function Loading() {
  return /*#__PURE__*/React.createElement("div", {
    className: "loading-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://avatars.githubusercontent.com/u/1743227?s=280&v=4",
    alt: "OpenWeatherMap",
    className: "openweathermap-loading-logo"
  }));
}

// Form component for city input, allows the user to search for weather based on city
function LocationForm(_ref3) {
  var city = _ref3.city,
    handleCityChange = _ref3.handleCityChange,
    handleSubmit = _ref3.handleSubmit,
    setIsWeatherInputVisible = _ref3.setIsWeatherInputVisible,
    error = _ref3.error,
    weatherInputAnimation = _ref3.weatherInputAnimation,
    setWeatherInputAnimation = _ref3.setWeatherInputAnimation,
    windowWidth = _ref3.windowWidth;
  var iconSize = function iconSize(width) {
    if (width <= 768 && width >= 400) {
      return "17px";
    } else if (width <= 1000 && width >= 768) {
      return "21px";
    } else if (width <= 1520 && width >= 1000) {
      return "25px";
    } else if (width >= 1520) {
      return "34px";
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "location-form ".concat(weatherInputAnimation ? 'slidedown' : 'slideup')
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://avatars.githubusercontent.com/u/1743227?s=280&v=4",
    alt: "OpenWeatherMap",
    className: "openweathermap-location-logo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "form-content-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "form-input-title"
  }, "Enter City ", error && /*#__PURE__*/React.createElement("span", {
    className: "error-message"
  }, "(", error, ")")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: city,
    onChange: handleCityChange,
    placeholder: "Eg. London",
    className: "location-input ".concat(error ? 'error' : '')
  }), /*#__PURE__*/React.createElement("div", {
    className: "button-container"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "search-button"
  }, /*#__PURE__*/React.createElement("p", {
    className: "search-button-text"
  }, "Search"), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: iconSize(windowWidth),
    viewBox: "0 -960 960 960",
    width: iconSize(windowWidth),
    fill: "whitesmoke"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M465.33-80.67Q385-83.33 314.67-115.83q-70.34-32.5-122.34-86.17t-82.16-125.18Q80-398.69 80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q148 0 257.83 93.17Q847.67-693.67 873.33-553h-68q-17.66-80.33-70.16-143.5t-130.5-94.83V-774q0 34.33-23.84 59.5-23.83 25.17-58.16 25.17H438v84.66q0 16.72-12.83 28.03-12.84 11.31-29.84 11.31h-82V-480h100v123.33h-58l-200-200q-4.33 19.34-6.5 38.45-2.16 19.11-2.16 38.22 0 133.67 91.33 230.33Q329.33-153 465.33-147.33v66.66Zm382.67-24-132-132q-21 14-45.33 22-24.34 8-50.38 8-72.34 0-122.98-50.58-50.64-50.57-50.64-122.83 0-72.25 50.58-122.75 50.57-50.5 122.83-50.5 72.25 0 122.75 50.64t50.5 122.98q0 26.04-8.33 50.38-8.33 24.33-21.67 46l132 131.33L848-104.67ZM619.91-273.33q44.76 0 75.76-30.91 31-30.91 31-75.67 0-44.76-30.91-75.76-30.91-31-75.67-31-44.76 0-75.76 30.91-31 30.91-31 75.67 0 44.76 30.91 75.76 30.91 31 75.67 31Z"
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      setTimeout(function () {
        return setIsWeatherInputVisible(false);
      }, 1000);
      setWeatherInputAnimation(false);
    },
    className: "cancel-button"
  }, "Cancel")))));
}

// Component to display weather details
function WeatherDisplay(_ref4) {
  var weather = _ref4.weather,
    setIsWeatherInputVisible = _ref4.setIsWeatherInputVisible,
    setWeatherInputAnimation = _ref4.setWeatherInputAnimation,
    windowWidth = _ref4.windowWidth;
  // Function to return the corresponding weather icon based on the weather condition
  var weatherIcon = function weatherIcon(icon) {
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
  var bgGradient = function bgGradient(fetchedTime) {
    var timeString = fetchedTime;
    var _timeString$split = timeString.split(" "),
      _timeString$split2 = _slicedToArray(_timeString$split, 2),
      time = _timeString$split2[0],
      modifier = _timeString$split2[1]; // Split into time and AM/PM
    var _time$split$map = time.split(":").map(Number),
      _time$split$map2 = _slicedToArray(_time$split$map, 2),
      hour = _time$split$map2[0],
      minutes = _time$split$map2[1]; // Split into hours and minutes

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
  var getGradient = function getGradient(fetchedTime) {
    var timeString = fetchedTime;
    var _timeString$split3 = timeString.split(" "),
      _timeString$split4 = _slicedToArray(_timeString$split3, 2),
      time = _timeString$split4[0],
      modifier = _timeString$split4[1]; // Split into time and AM/PM
    var _time$split$map3 = time.split(":").map(Number),
      _time$split$map4 = _slicedToArray(_time$split$map3, 2),
      hour = _time$split$map4[0],
      minutes = _time$split$map4[1]; // Split into hours and minutes

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
  var iconSize = function iconSize(width) {
    if (width <= 768 && width >= 400) {
      return "15px";
    } else if (width <= 1000 && width >= 768) {
      return "19px";
    } else if (width <= 1520 && width >= 1000) {
      return "22.5px";
    } else if (width >= 1520) {
      return "30px";
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "weather-container",
    style: {
      background: bgGradient(weather.time),
      transition: "background 0.5s ease"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "add-new-city-button",
    onClick: function onClick() {
      setIsWeatherInputVisible(true);
      setWeatherInputAnimation(true);
    },
    style: {
      background: getGradient(weather.time),
      transition: "background 0.5s ease"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "add-new-city-text"
  }, "New City"), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: iconSize(windowWidth),
    viewBox: "0 -960 960 960",
    width: iconSize(windowWidth),
    fill: "black"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "city-date-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "city-name"
  }, weather.name), /*#__PURE__*/React.createElement("p", {
    className: "date-time"
  }, "Today, ", weather.date, " ", weather.time)), /*#__PURE__*/React.createElement("div", {
    className: "weather-details-container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "temperature"
  }, weather.temperature, "\xB0"), /*#__PURE__*/React.createElement("div", {
    className: "description-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, weather.description), /*#__PURE__*/React.createElement("p", {
    className: "temp-range"
  }, weather.maxTemp, "\xB0 | ", weather.minTemp, "\xB0"))), /*#__PURE__*/React.createElement("div", {
    className: "weather-icon-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: weatherIcon(weather.icon),
    alt: "weather icon",
    className: "weather-icon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "more-weather-details-container",
    style: {
      background: getGradient(weather.time),
      transition: "background 0.5s ease"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "details-title"
  }, "Weather now"), /*#__PURE__*/React.createElement("div", {
    className: "details-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-temperature-three-quarters detail-icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "detail-text"
  }, /*#__PURE__*/React.createElement("p", {
    className: "detail-category"
  }, "Feel like"), /*#__PURE__*/React.createElement("p", {
    className: "detail-value"
  }, weather.feels, "\xB0"))), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-wind detail-icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "detail-text"
  }, /*#__PURE__*/React.createElement("p", {
    className: "detail-category"
  }, "Wind"), /*#__PURE__*/React.createElement("p", {
    className: "detail-value"
  }, weather.wind, " m/s"))), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-droplet detail-icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "detail-text"
  }, /*#__PURE__*/React.createElement("p", {
    className: "detail-category"
  }, "Humidity"), /*#__PURE__*/React.createElement("p", {
    className: "detail-value"
  }, weather.humidity, "%"))), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-water detail-icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "detail-text"
  }, /*#__PURE__*/React.createElement("p", {
    className: "detail-category"
  }, "Pressure"), /*#__PURE__*/React.createElement("p", {
    className: "detail-value"
  }, weather.pressure, " hPa")))))));
}

// LandingPage component displays the main page with weather-related information
function LandingPage(_ref5) {
  var setIsWeatherInputVisible = _ref5.setIsWeatherInputVisible,
    setWeatherInputAnimation = _ref5.setWeatherInputAnimation,
    windowWidth = _ref5.windowWidth;
  var iconSize = function iconSize(width) {
    if (width <= 768 && width >= 400) {
      return "17px";
    } else if (width <= 1000 && width >= 768) {
      return "21px";
    } else if (width <= 1520 && width >= 1000) {
      return "25px";
    } else if (width >= 1520) {
      return "34px";
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "landing-page"
  }, /*#__PURE__*/React.createElement("span", {
    className: "animation-icons"
  }, /*#__PURE__*/React.createElement("img", {
    id: "a1",
    src: "https://cdn4.iconfinder.com/data/icons/weatherful/72/Cloudy-256.png",
    alt: "scattered clouds"
  }), /*#__PURE__*/React.createElement("img", {
    id: "a2",
    src: "https://cdn4.iconfinder.com/data/icons/weatherful/72/Cloudy-256.png",
    alt: "scattered clouds"
  }), /*#__PURE__*/React.createElement("img", {
    id: "a3",
    src: "https://cdn4.iconfinder.com/data/icons/weatherful/72/Cloudy-256.png",
    alt: "scattered clouds"
  }), /*#__PURE__*/React.createElement("img", {
    id: "a4",
    src: "https://cdn4.iconfinder.com/data/icons/weatherful/72/Cloudy-256.png",
    alt: "scattered clouds"
  }), /*#__PURE__*/React.createElement("img", {
    id: "a5",
    src: "https://cdn4.iconfinder.com/data/icons/weatherful/72/Cloudy-256.png",
    alt: "scattered clouds"
  }), /*#__PURE__*/React.createElement("img", {
    id: "sun",
    src: "https://openweathermap.org/img/wn/01d@2x.png",
    alt: "Sun"
  })), /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, "Welcome to the Weather App"), /*#__PURE__*/React.createElement("p", {
    className: "page-description"
  }, "Get real-time weather updates for your city!"), /*#__PURE__*/React.createElement("p", {
    className: "page-description"
  }, "Shows Temperature, Wind, Humidity, and Pressure"), /*#__PURE__*/React.createElement("button", {
    className: "location-form-button",
    onClick: function onClick() {
      setIsWeatherInputVisible(true);
      setWeatherInputAnimation(true);
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "location-form-button-text"
  }, "Search City"), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: iconSize(windowWidth),
    viewBox: "0 -960 960 960",
    width: iconSize(windowWidth),
    fill: "beige"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M480.09-490q28.91 0 49.41-20.59 20.5-20.59 20.5-49.5t-20.59-49.41q-20.59-20.5-49.5-20.5t-49.41 20.59q-20.5 20.59-20.5 49.5t20.59 49.41q20.59 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "page-credits"
  }, "Powered by ", /*#__PURE__*/React.createElement("a", {
    href: "https://openweathermap.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "openweathermap-link"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://avatars.githubusercontent.com/u/1743227?s=280&v=4",
    alt: "OpenWeatherMap",
    className: "openweathermap-credits-logo"
  }), " OpenWeatherMap"), " API")));
}

// Render the WeatherApp component into the DOM
var element = /*#__PURE__*/React.createElement(WeatherApp, null);
// ReactDOM.render renders the component into the element with the ID 'contents'
ReactDOM.render(element, document.getElementById('contents'));