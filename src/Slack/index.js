const { router, slack } = require("bottender/router");
const HandleMessage = require("./handle-message");
const HandleTodayEventsCmd = require("./handle-today-events-cmd");
const HandleSomeoneTodayEventsCmd = require("./handle-someone-today-events-cmd");
const HandleEvents = require("./handle-events");

module.exports = function SlackAction() {
  return router([
    slack.message(HandleMessage),
    slack.command("/today_events", HandleTodayEventsCmd),
    slack.command("/today_events_who", HandleSomeoneTodayEventsCmd),
    slack.event("*", HandleEvents),
  ]);
};
