module.exports = async function MessengerAction(context) {
  if (context.event.isText) {
    await context.sendGenericTemplate([
      {
        title: "Welcome to Peter's Hats",
        imageUrl: "https://picsum.photos/300/200",
        subtitle: "We've got the right hat for everyone.",
        defaultAction: {
          type: "web_url",
          url: "https://yahoo.com/",
          webviewHeightRatio: "tall",
        },
        buttons: [
          {
            type: "web_url",
            title: "Webview",
            url: "https://time.is/en/",
            webviewHeightRatio: "tall",
            messengerExtensions: true,
            fallbackUrl: "https://time.is/en/",
          },
          {
            type: "web_url",
            title: "Google Link",
            url: "https://google.com/",
            webviewHeightRatio: "tall",
          },
        ],
      },
    ]);
  }
};
