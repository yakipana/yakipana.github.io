var yyyymmddhhmiss = function() {
    var date = new Date();
    var yyyy = date.getFullYear();
    var mm = toDoubleDigits(date.getMonth() + 1);
    var dd = toDoubleDigits(date.getDate());
    var hh = toDoubleDigits(date.getHours());
    var mi = toDoubleDigits(date.getMinutes());
    var ss = toDoubleDigits(date.getSeconds())
    var element = document.getElementById("date1");
    element.innerHTML =  hh;
    var element = document.getElementById("date2");
    element.innerHTML =  mi;
    // var element = document.getElementById("tsuki");
    // element.innerHTML =  yyyy + '.' + mm + '.' + dd; 

    if(ss==59){
      const p = document.getElementById("date2");
      p.animate([{opacity: '1'}, {opacity: '0'}], 1000);
    }else if(ss==00){
      const p = document.getElementById("date2");
      p.animate([{opacity: '0'}, {opacity: '1'}], 1000);
    }
    if(mi==59&&ss==59){
      const p = document.getElementById("date1");
      p.animate([{opacity: '1'}, {opacity: '0'}], 1000);
    }else if(mi==00&&ss==00){
      const p = document.getElementById("date1");
      p.animate([{opacity: '0'}, {opacity: '1'}], 1000);
    }

  };
  var toDoubleDigits = function(num) {
    num += "";
    if (num.length === 1) {
      num = "0" + num;
    }
   return num;
  };
  setInterval(yyyymmddhhmiss, 1000);