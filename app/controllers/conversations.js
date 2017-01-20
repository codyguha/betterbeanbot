module.exports = function (controller) {
  // this is triggered when a user clicks the send-to-messenger plugin
  controller.on('facebook_optin', function (bot, message) {
    bot.reply(message, 'Welcome, friend')
  })

  // user said hello
  controller.hears(['hello', 'hi'], 'message_received', function (bot, message) {
    bot.reply(message, 'Hey there.')
  })

  controller.hears(['help'], 'message_received', function (bot, message) {
    bot.reply(message, "type 'menu' to see what surveys are offered for you to participate in.")
  })

  controller.hears(['how are you?', 'how are you'], 'message_received', function (bot, message) {
    bot.reply(message, 'I`m good thanks for asking.')
  })

  controller.hears(['what can i do here?', 'what can i do here'], 'message_received', function (bot, message) {
    bot.reply(message, "You can take surveys with me.")
  })
  controller.hears(['menu'], 'message_received', function (bot, message) {
    bot.reply(message, {
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"generic",
          "elements":[
             {
              "title":"COMMUNITY SURVEY",
              "image_url":"",
              "subtitle":"Take 5 min and check out our end of year Advertising Awareness Questionnaire.",
              "buttons":[
                {
                  "type":"web_url",
                  "url":"https://www.cubepartnerconnect.com/c/a/6kCWl329y1s2oV9yyN53kA",
                  "title":"Take This Survey",
                  "messenger_extensions": true,
                  "webview_height_ratio": "tall"
                }
              ]
            },{
              "title":"CHAT TOPIC",
              "image_url":"",
              "subtitle":"Help us decide on a couple Holiday Menu items.",
              "buttons":[
                {
                  "type":"web_url",
                  "url":"https://www.cubepartnerconnect.com/c/a/6kCWl329y1s2oV9yyN53kA",
                  "title":"Start this Chat",
                  "messenger_extensions": true,
                  "webview_height_ratio": "tall"
                }
              ]
            },{
              "title":"FEEDBACK TOPIC",
              "image_url":"",
              "subtitle":"Share a photo or video on the most effective Marketing you saw over the holiday.",
              "buttons":[
                {
                  "type":"web_url",
                  "url":"https://www.cubepartnerconnect.com/c/a/6kCWl329y1s2oV9yyN53kA",
                  "title":"Share Feedback",
                  "messenger_extensions": true,
                  "webview_height_ratio": "tall"
                }
              ]
            }, {
              "title":"CHAT CHALLENGE",
              "image_url":"",
              "subtitle":"Why not try one of our chat challenges? Its just 10 questions a day for 10 days.",
              "buttons":[
                {
                  "type":"web_url",
                  "url":"https://www.cubepartnerconnect.com/c/a/6kCWl329y1s2oV9yyN53kA",
                  "title":"Accept the Challenge",
                  "messenger_extensions": true,
                  "webview_height_ratio": "tall"
                },{
                  "type":"web_url",
                  "url":"https://www.cubepartnerconnect.com/c/a/6kCWl329y1s2oV9yyN53kA",
                  "title":"View Leaderboard",
                  "messenger_extensions": true,
                  "webview_height_ratio": "tall"
                }
              ]
            }, {
              "title":"CHAT TOPIC",
              "image_url":"",
              "subtitle":"Say hello to Survey Chicken.",
              "buttons":[
                {
                  "type":"web_url",
                  "url":"https://www.messenger.com/t/surveychicken/",
                  "title":"Start this Chat",
                }
              ]
            }
          ]
        }
      }
    })
  })


  // user says anything else
  controller.hears('(.*)', 'message_received', function (bot, message) {
    bot.reply(message, 'I heard ' + message.match[1])
  })
}
