// Ref: https://github.com/RajKKapadia/Google_Calendar_Youtube_Demo
const { google } = require("googleapis");
const dayjs = require("dayjs");
require("dotenv").config();

// Provide the required configuration
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
const calendarId = process.env.CALENDAR_ID;

// Google calendar API settings
const SCOPES = "https://www.googleapis.com/auth/calendar";
const calendar = google.calendar({ version: "v3" });

const auth = new google.auth.JWT(
  CREDENTIALS.client_email,
  null,
  CREDENTIALS.private_key,
  SCOPES
);

// Get all the events between two dates
const getEvents = async (dateTimeStart, dateTimeEnd) => {
  try {
    let response = await calendar.events.list({
      auth: auth,
      calendarId: calendarId,
      timeMin: dateTimeStart,
      timeMax: dateTimeEnd,
      timeZone: "Asia/Taipei",
    });

    let items = response["data"]["items"];
    return items;
  } catch (error) {
    console.log(`Error at getEvents --> ${error}`);
    return 0;
  }
};

module.exports = {
  // Get all the events today
  getEventsToday: () => {
    const start = dayjs().startOf("day").toISOString();
    const end = dayjs().endOf("day").toISOString();

    return getEvents(start, end);
  },
};
