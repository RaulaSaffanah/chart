$(document).on("keyup", calculate());

function calculate() {
  var p = document.querySelector("#loan").value;
  var years = document.querySelector("#years").value;
  var rate = document.querySelector("#rate").value;
  var r = rate / 100 / 12;
  var n = years * 12;
  var m1 = r * Math.pow(1 + r, n);
  var m2 = Math.pow(1 + r, n) - 1;
  var m = (p * (m1 / m2)).toFixed(2);
  var I = ((p - n) / m).toFixed(2);
  var ti = m * n - p;
  var mr = (m - I).toFixed(2);
  document.querySelector("#monthlyRepayment").value = m;
  document.querySelector("#interest").value = I;
  document.querySelector("#totalInterest").value = ti;
  document.querySelector("#capitalRepayment").value = mr;
}
