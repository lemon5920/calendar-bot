## Todo Notification Bot

此機器人用於 Slack 回答使用者：某人今日在指定 Google 行事曆上有什麼活動。

支援兩個 Commands:

- `/today_events` : 列出「自己」今日所有活動。
- `/today_events_who` : 列出「某人」今日活動。command 下完後，會出現 User Selector 跟你互動。

註：所有訊息都是透過 `postEphemeral` 發出，只有互動者可見，因此如果在群組中使用，並不會影響到其他人，可以盡情的跟機器人互動。

## Configuration

### Google API Token & Calendar API

可參考 [此影片](https://www.youtube.com/watch?v=dFaV95gS_0M) 設定。

主要工作為：

- GCP 產生 Token。
- 啟用 Calendar API。
- 新增行事曆。
- 相關參數加進 `.env`。

### Slack 設定

可參考 [Bottender](https://bottender.js.org/docs/zh-TW/getting-started) 的文件說明。

主要工作為：

- 建立與設定 Slack App、Token、Scope、Event Subscriptions 等..。 [參考](https://bottender.js.org/docs/zh-TW/channel-slack-setup#%E5%BB%BA%E7%AB%8B-slack-app)
- 啟用 Interactivity。 [參考](https://bottender.js.org/docs/zh-TW/channel-slack-block-kit#%E5%9C%A8-block-%E7%9A%84%E4%BA%92%E5%8B%95) (現在這個頁面叫「Interactivity & Shortcuts」)
- 建立 Slash Command。 [參考](https://bottender.js.org/docs/zh-TW/channel-slack-slash-command#handling-slash-commands)

## Available Scripts

這個 Bot 是以 [Bottender](https://github.com/Yoctol/bottender) 為基礎建立，Script 與原本大同小異：

### `yarn dev`

Runs the app in development mode.<br>
The bot will automatically reload if you make changes to the code.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000) and ngrok runs on [http://localhost:4040](http://localhost:4040).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
yarn dev --console
npm run dev -- --console
```

### `yarn start`

Runs the app in production mode.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
yarn start --console
npm start -- --console
```

### `yarn deploy-heroku`

Deploy the app to [Heroku](https://www.heroku.com/) that you logged in.
