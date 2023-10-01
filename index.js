const inboxCampPingButlerBotToken =
  "bot6306154325:AAGealnx-L-5dWA-qCFurzBKWaC5lrr8b84";
const inboxCampChannelID = -1001938140935;
const start = Date.now();
fetch("https://inboxcamp.com").then(function (pingRes) {
  const report = {
    text: pingRes.status + ", " + (Date.now() - start) / 1000 + "ms",
    chat_id: inboxCampChannelID,
  };
  console.log(JSON.stringify(report));
  fetch(`https://api.telegram.org/${inboxCampPingButlerBotToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(report),
  });
});
