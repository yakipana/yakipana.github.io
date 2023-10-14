// 0でライト、0でダーク
var backgroundcolor = 0;

  // bodyをクリックしたら作動
  function colorswitch(){
    if(backgroundcolor==0){
      var ans01 = window.confirm("ダークモードに切り替えますか？");
        if(ans01==true){
          document.getElementById("colorsheet").href="dark.css";
          backgroundcolor = 1;
        }else if(ans01==false){
          backgroundcolor = 0;
        }
    }else if(backgroundcolor==1){
      var ans02 = window.confirm("ライトモードに切り替えますか？");
        if(ans02==true){
          document.getElementById("colorsheet").href="light.css";
          backgroundcolor = 0;
        }else if(ans02==false){
          backgroundcolor = 1;
        }
    }

  }

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