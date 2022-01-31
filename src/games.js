const Discord = require("discord.js");
const anime = require("./pictures/pics");

module.exports = async function (msg) {
  //8ball
  const rep = [
    "As I see it, yes!",
    "Concentrate and ask again!",
    "It is decidedly so!",
    "Don't count on it!",
    "My sources say no",
  ];
  var num = Math.floor(Math.random() * (rep.length - 0 + 1)) + 0;
  if (msg.content.startsWith("-8ball")) {
    msg.reply(rep[num]);
  }

  //Who am I Game - Anime
  if (msg.content.startsWith("-anime") || msg.content.startsWith("-Anime")) {
    var animeName = msg.content.split(" ");
    if (animeName.length === 2) {
      //Demon Slayer as anime
      if (animeName[1].toUpperCase() === "DemonSlayer".toUpperCase()) {
        var picPicker = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
        msg.reply("You Got: ", {
          files: [anime.DemonSlayerCharacters[picPicker]],
        });
      }
      //no anime
      else {
        msg.reply("Cannot Comprehend Anime");
      }
    } else {
      msg.reply("Cannot Comprehend Anime");
    }
  }
};
