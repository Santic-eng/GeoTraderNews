
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
// TradingView-ähnlichen Chart anzeigen
const chartDiv = document.getElementById('chart');
const chart = LightweightCharts.createChart(chartDiv, { width: chartDiv.clientWidth, height: 300 });
const lineSeries = chart.addLineSeries();

// Hier lädst du echte Daten von einer Aktien-API
fetch('https://deine-aktien-api.com/nvidia')
  .then(response => response.json())
  .then(data => {
    lineSeries.setData(data);
  });
// TradingView-artiger Aktienchart (mit Beispiel-Daten)
const chartDiv = document.getElementById('chart');
const chart = LightweightCharts.createChart(chartDiv, { 
  width: chartDiv.clientWidth, 
  height: 300 
});
const lineSeries = chart.addLineSeries();

// Beispiel-Daten (später mit echter API ersetzen)
lineSeries.setData([
  { time: '2025-04-01', value: 100 },
  { time: '2025-04-02', value: 101 },
  { time: '2025-04-03', value: 105 },
  { time: '2025-04-04', value: 104 },
  { time: '2025-04-05', value: 106 },
  { time: '2025-04-06', value: 108 },
  { time: '2025-04-07', value: 110 },
  { time: '2025-04-08', value: 109 },
]);
