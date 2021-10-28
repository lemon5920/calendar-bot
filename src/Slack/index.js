const { router, slack } = require("bottender/router");
const HandleMessage = require("./handle-message");

module.exports = function SlackAction() {
  return router([
    slack.message(HandleMessage),
  ]);
};
