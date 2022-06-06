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

  var config = { responsive: true };

  Plotly.newPlot('Line1', data, layout, config);
});

// Daily New Cases
d3.csv('https://raw.githubusercontent.com/NgurahFajar/GKV/main/covid_19_indonesia_time_series_all.csv', function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }

  var trace2 = {
    type: 'scatter',
    mode: 'lines',
    name: 'Daily New Cases',
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'New Cases'),
    line: { color: 'orange' },
  };

  var data2 = [trace2];

  var layout2 = {
    title: 'Daily New Cases',
  };
  var config2 = { responsive: true };

  Plotly.newPlot('Line2', data2, layout2, config2);
});

// Daily New Deaths
d3.csv('https://raw.githubusercontent.com/NgurahFajar/GKV/main/covid_19_indonesia_time_series_all.csv', function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }

  var trace3 = {
    type: 'scatter',
    mode: 'lines',
    name: 'Daily New Deaths',
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'New Deaths'),
    line: { color: 'red' },
  };

  var data3 = [trace3];

  var layout3 = {
    title: 'Daily New Deaths',
  };
  var config3 = { responsive: true };

  Plotly.newPlot('Line3', data3, layout3, config3);
});
