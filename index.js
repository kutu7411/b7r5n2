////////////////////////////////////////////
const { Telegraf, Markup } = require("telegraf");
const bot = new Telegraf("5278289841:AAF_tZWgdfYuX_J70bd-K6dPnBOADoTnIMY");
const express = require("express");
const app = express();
const fs = require("fs");
 
const axios = require("axios");

const interval = 10 * 60 * 1000;
const targetURLs = ["https://f123456789.mr1ay.repl.co/naber"];
 
//const botToken = process.env.B;
//const botToken = "6239102664:AAECT0lRP4sMbqusbQxnd4f-g6js1jgXHls";

const chatId = "-627979832";
var f = 1;

//   server       sunucu
app.get("/", (req, res) => {
  res.send("yesss");
}); //sunucu

app.get("/naber", (req, res) => {
  res.send("iyi");
}); //sunucu
app.listen(4000, () => {
  console.log("working");
}); //server





const yeni     = require('./yeni.js')    ;  yeni.yeni(bot)









/*
//////////////////////////////////////  
const ilk     = require('./menu/ilk.js')    ;  ilk.ilk(bot)
const canli   = require('./menu/canli.js') ;  canli.canli(bot)
const genetik = require('./menu/genetik')  ;  genetik.genetik(bot)
const hucre   = require('./menu/hucre')    ;  hucre.hucre(bot)
const sistem  = require('./menu/sistem')   ;  sistem.sistem(bot)
//////////////////////////////////////

*/
bot.launch();
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("ok");
});
server.listen(4000);

////////////////////////////////////////////
/*

targetURLs.forEach((url) => {
  setInterval(() => {  
    sendRequest(url, f);
  }, interval);
});

function sendRequest(url, f) {
  axios
    .get(url)
    .then((response) => {
      if (response.status === 200 && response.data === "iyi") {
        //const sitename = url.split('/').pop(); // URL'den sitenin adını çıkarır
        const sitename = url.substring(8, 16);
        const message = f + `iyi ${sitename}`;
        // sendDosyaMessage(message);
      }
    })
    .catch((error) => {
      const sitename = url.substring(8, 16);
      const message = f + `o burda değil ${sitename}`;
    });
}
function sendDosyaMessage(message) {
  const now = new Date();
  const tarih = now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate();
  const saat = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

  // Tarih ve saat verisini mesaja ekle
  message = "\n" + tarih + " " + saat + " " + message;

  // Dosyaya mesajı yaz
  fs.appendFile("server.txt", message, function (err) {
    if (err) {
      console.error(err);
      return;
    }
  });
}
function sendTelegramMessage(message) {
  const axiosConfig = {
    method: "post",
    url: `https://api.telegram.org/bot${botToken}/sendMessage`,
    data: {
      chat_id: chatId,
      text: message,
    },
  };

  axios(axiosConfig)
    .then((response) => {
      //console.log('Telegram mesajı gönderildi:', response.data);
      console.log(".");
    })
    .catch((error) => {
      console.log(".");

      //console.error('Telegram mesajı gönderme hatası:', error);
    });
}
///
*/