const UserSelectTemplate = require("./block-template/user-select");

module.exports = async function HandleTodayEventsCmd(context) {
  await context.chat.postEphemeral(UserSelectTemplate());
};
