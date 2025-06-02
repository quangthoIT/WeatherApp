"use strict";
import { updateWeather, error404 } from "./app.js";
const defaultLocation = "#/weather?lat=10.812732&lon=106.596336"; // Default location for Ho Chi Minh City, Vietnam

const currentLocation = function () {
  window.navigator.geolocation.getCurrentPosition(
    (res) => {
      const { latitude, longitude } = res.coords;
      updateWeather(latitude, longitude);
    },
    (err) => {
      window.location.hash = defaultLocation;
    },
  );
};

/**
 *
 * @param {string} query Query string containing latitude and longitude
 */

// const searchedLocation = (query) => updateWeather(...query.split("&"));
const searchedLocation = (query) => {
  const params = new URLSearchParams(query);
  const lat = parseFloat(params.get("lat"));
  const lon = parseFloat(params.get("lon"));
  updateWeather(lat, lon);
};

const routes = new Map([
  ["/current-location", currentLocation],
  ["/weather", searchedLocation],
]);

const checkHash = function () {
  const requestURL = window.location.hash.slice(1);
  const [route, query] = requestURL.includes("?")
    ? requestURL.split("?")
    : [requestURL];
  routes.get(route) ? routes.get(route)(query) : error404();
};

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
  if (!window.location.hash) {
    window.location.hash = "#/current-location";
  } else {
    checkHash();
  }
});
