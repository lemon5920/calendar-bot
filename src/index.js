const { platform, router } = require("bottender/router");
const SlackAction = require("./Slack");

module.exports = async function App() {
  return router([platform("slack", SlackAction)]);
};
