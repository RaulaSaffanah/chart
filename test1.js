$(function() {
  var valtemp1 = new Array(1024).fill(0);

  $("#btn").click(function() {
    var amp, freq, chart1, chart2;

    amp = parseFloat($("input[id=amplitudo]").val());
    freq = parseFloat($("input[id=frequensi]").val());

    var osc = new Oscillator(DSP.Sine, freq, amp, 1024, 1024);
    osc.generate();
    var signal = osc.signal;

    for (var i = 0; i < signal.length; i++) {
      var w = signal[i] + valtemp1[i];
      // console.log(valtemp1[i]);
      valtemp1[i] = w;
    }

    var fft = new FFT(1024, 1024);
    fft.forward(valtemp1);
    var freqtemp = fft.spectrum;

    chart1 = {
      title: {
        text: "Waveform"
      },
      yAxis: {
        title: {
          text: "Amplitudo"
        }
      },
      xAxis: {
        title: {
          text: "Time" // Title for the yAxis
        }
      },
      chart: {
        zoomType: "x",
        borderColor: "#dcdcdc", // whatever you want
        borderWidth: 1
      },
      plotOptions: {
        series: {
          turboTreshold: 5000
        },
        spline: {
          lineWidth: 4,
          states: {
            hover: {
              lineWidth: 5
            }
          },
          marker: {
            enabled: false
          },
          pointInterval: 1,
          pointStart: 0
        }
      },
      legend: {
        enabled: false // Enable/Disable the legend
      },
      credits: {
        enabled: false
      },
      series: [
        {
          type: "spline",
          name: "1",
          data: valtemp1
        }
      ]
    };

    chart2 = {
      title: {
        text: "Spectrum"
      },
      yAxis: {
        title: {
          text: "Amplitudo" // Title for the yAxis
        }
      },
      xAxis: {
        title: {
          text: "Frequency" // Title for the yAxis
        }
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false // Enable/Disable the legend
      },
      chart: {
        borderColor: "#dcdcdc", // whatever you want
        borderWidth: 1
      },
      plotOptions: {
        series: {
          turboTreshold: 5000
        },
        spline: {
          lineWidth: 4,
          states: {
            hover: {
              lineWidth: 5
            }
          },
          marker: {
            enabled: false
          },
          pointInterval: 1,
          pointStart: 0
        }
      },

      series: [
        {
          type: "spline",
          name: "1",
          data: freqtemp
        }
      ]
    };

    $("#chart1").highcharts(chart1);
    $("#chart2").highcharts(chart2);
    return false;
  });
});
