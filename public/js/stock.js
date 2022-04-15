Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-c.json', function (data) {
  Highcharts.stockChart('container', {
    rangeSelector: {
      selected: 1
    },

    title: {
      text: 'Tesla Stock Price'
    },

    series: [{
      name: 'TSLA',
      data: data,
      tooltip: {
        valueDecimals: 2
      }
    }]
  });
});