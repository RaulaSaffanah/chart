$(function() {
  $("#btn").click(function() {
    var val1, val2, options;

    val1 = parseFloat($("input[id=monthlyRepayment]").val());
    val2 = parseFloat($("input[id=capitalRepayment]").val());

    options = {
      series: [
        {
          type: "spline",
          name: "Browser share",
          data: [0, val1, 0, val2, 0]
        }
      ]
    };

    $("#container").highcharts(options);
  });
});
