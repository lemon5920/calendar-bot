module.exports = UserSelectTemplate = () => ({
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "請選擇您要搜尋的對象：",
      },
      accessory: {
        type: "users_select",
        placeholder: {
          type: "plain_text",
          text: "Select a user",
          emoji: true,
        },
        action_id: "user_select-action",
      },
    },
  ],
});
