module.exports = function (controller) {
  // this is triggered when a user clicks the send-to-messenger plugin
  controller.on('facebook_optin', function (bot, message) {
    bot.reply(message, 'Welcome, friend')
  })

  // user said hello
  controller.hears(['hello', 'hi'], 'message_received', function (bot, message) {
    bot.reply(message, 'Hey there.')
  })

  controller.hears(['how are you?', 'how are you'], 'message_received', function (bot, message) {
    bot.reply(message, 'I`m good thanks for asking')
  })

  controller.hears(['what can i do here?', 'what can i do here'], 'message_received', function (bot, message) {
    bot.reply(message, 'I am just an echo bot for now. I will repeat back whatever is said to me.')
  })

  // user says anything else
  controller.hears('(.*)', 'message_received', function (bot, message) {
    bot.reply(message, 'I heard ' + message.match[1])
  })
}
