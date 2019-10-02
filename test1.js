$(function() {
  var valtemp1 = new Array(1024);

  $("#btn").click(function() {
    var val1, val2, options;

    val1 = parseFloat($("input[id=amplitudo]").val());
    val2 = parseFloat($("input[id=frequensi]").val());

    var osc = new Oscillator(DSP.Sine, val2, val1, 1024, 1024);
    osc.generate();
    var signal = osc.signal;

    for (var i = 0; i < signal.length; i++) {
      var w = signal[i] + valtemp1[i];
      valtemp1[i] = w;
    }

    options = {
      plotOptions: {
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
          data: valtemp1
        }
      ]
    };

    $("#wadah").highcharts(options);
    return false;
  });
});
