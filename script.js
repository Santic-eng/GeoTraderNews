
// Beispielhafte Logik für spätere API-Integration
console.log("GeoNewsTrader ready");
// Beispiel-Update alle 60 Sekunden:
setInterval(function() {
  fetch('https://deine-news-api.com/latest')
    .then(response => response.json())
    .then(data => {
      const newsDiv = document.getElementById('news');
      const newsItem = document.createElement('p');
      newsItem.innerHTML = `<strong>${data.time}</strong> – ${data.message} <br>➤ <span class="tip">${data.tip}</span>`;
      newsDiv.prepend(newsItem); // Neue News stehen oben
    });
}, 60000); // Alle 60 Sekunden
