const { platform, router } = require("bottender/router");
const SlackAction = require("./Slack");
const MessengerAction = require("./Messenger");

module.exports = async function App() {
  return router([
    platform("slack", SlackAction),
    platform("messenger", MessengerAction),
  ]);
};
