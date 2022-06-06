// Daily New Recovered
d3.csv('https://raw.githubusercontent.com/NgurahFajar/GKV/main/covid_19_indonesia_time_series_all.csv', function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }

  var trace1 = {
    type: 'scatter',
    mode: 'lines',
    name: 'Daily New Recovered',
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'New Recovered'),
    line: { color: 'green' },
  };

  var data = [trace1];

  var layout = {
    title: 'Daily New Recovered',
  };

  Plotly.newPlot('Line1', data, layout);
});

// Daily New Recovered
d3.csv('https://raw.githubusercontent.com/NgurahFajar/GKV/main/covid_19_indonesia_time_series_all.csv', function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }

  var trace2 = {
    type: 'scatter',
    mode: 'lines',
    name: 'Daily New Recovered',
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'New Recovered'),
    line: { color: 'green' },
  };

  var data2 = [trace2];

  var layout2 = {
    title: 'Daily New Recovered',
  };

  Plotly.newPlot('Line2', data2, layout2);
});
