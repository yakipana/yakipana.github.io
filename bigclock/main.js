var yyyymmddhhmiss = function() {
    var date = new Date();
    var yyyy = date.getFullYear();
    var mm = toDoubleDigits(date.getMonth() + 1);
    var dd = toDoubleDigits(date.getDate());
    var hh = toDoubleDigits(date.getHours());
    var mi = toDoubleDigits(date.getMinutes());
    var ss = toDoubleDigits(date.getSeconds())
    var element = document.getElementById("date");
    element.innerHTML =  hh + ':' + mi + ':' + ss;
    var element = document.getElementById("tsuki");
    element.innerHTML =  yyyy + '.' + mm + '.' + dd; 
  };
  var toDoubleDigits = function(num) {
    num += "";
    if (num.length === 1) {
      num = "0" + num;
    }
   return num;
  };
  setInterval(yyyymmddhhmiss, 100);