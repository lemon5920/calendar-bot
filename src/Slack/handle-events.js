const { getEventsToday } = require("../libs/google-calendar");
const FormatEvents = require("../utils/format-events");
const CalendarTemplate = require("./block-template/calendar");

module.exports = async function HandleEvents(context) {
  const postExceptionMessage = async () =>
    await context.chat.postEphemeral({ text: "找不到事件。" });

  if (context.event.action) {
    const { actionId } = context.event.action;

    switch (actionId) {
      case "user_select-action":
        const user = await context.client.getUserInfo(
          context.event.action.selectedUser
        );
        const events = await getEventsToday();
        const result = FormatEvents(user.profile.email, events);

        await context.chat.postEphemeral(
          CalendarTemplate(user.realName, result)
        );
        break;
      default:
        postExceptionMessage();
    }
  } else {
    postExceptionMessage();
  }
};
