"use strict";
export const weekDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
/**
 *
 * @param {number} dateUnix Unix timestamp in seconds
 * @param {number} timezone Timezone offset in seconds
 * @returns {string} Formatted date string
 */
export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
};
/**
 *
 * @param {number} timeUnix Unix timestamp in seconds
 * @param {number} timezone Timezone offset in seconds
 * @returns {string} Formatted time string in 12-hour format with AM/PM
 */
export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12}:${minutes} ${period}`;
};
/**
 *
 * @param {number} timeUnix Unix timestamp in seconds
 * @param {number} timezone Timezone offset in seconds
 * @returns {string} Formatted hours in 12-hour format with AM/PM
 */
export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${period}`;
};
/**
 *
 * @param {number} mps Speed in meters per second
 * @returns {number} Speed in kilometers per hour
 */
export const mps_to_kmh = (mps) => {
  const mph = mps * 3600;
  return mph / 1000;
};

export const aqiText = {
  1: {
    level: "Good",
    message:
      "Air quality is considered satisfactory, and air pollution poses little or no risk.",
  },
  2: {
    level: "Fair",
    message:
      "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
  },
  3: {
    level: "Moderate",
    message:
      "Air quality is acceptable; however, there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
  },
  4: {
    level: "Poor",
    message:
      "Air quality is unhealthy for sensitive groups, such as children, the elderly, and people with respiratory or heart conditions. The general public is not likely to be affected.",
  },
  5: {
    level: "Unhealthy",
    message:
      "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.",
  },
};
