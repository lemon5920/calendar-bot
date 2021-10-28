const { router, slack } = require("bottender/router");
const HandleMessage = require("./handle-message");
const HandleTodayEventsCmd = require("./handle-today-events-cmd");

module.exports = function SlackAction() {
  return router([
    slack.message(HandleMessage),
    slack.command("/today_events", HandleTodayEventsCmd),
  ]);
};
