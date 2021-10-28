const { getEventsToday } = require("../libs/google-calendar");
const FormatEvents = require("../utils/format-events");
const CalendarTemplate = require("./block-template/calendar");

module.exports = async function HandleTodayEventsCmd(context) {
  const user = await context.client.getUserInfo(context.event.rawEvent.userId);
  const events = await getEventsToday();
  const result = FormatEvents(user.profile.email, events);

  await context.chat.postEphemeral(CalendarTemplate(null, result));
};
