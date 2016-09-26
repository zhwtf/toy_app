// Calculator

var RowCount = 4; 

//calculates percent instantly
function calculator() {
  for (var i = 1; i<=RowCount; i++) {
    var numerator = document.getElementById("A"+i+"_num").value;
    var denominator = document.getElementById("A"+i+"_den").value;
    var percent = numerator / denominator * 100;
    percent = Math.round(percent * 100) / 100;
    if( isFinite(numerator) == true && isFinite(denominator)==true && numerator>=0 && denominator>0) {
      document.getElementById("percent"+i).innerHTML = percent + "%";
      
    }
    else if(numerator=='' || denominator==''){
      document.getElementById("percent"+i).innerHTML = "";

    }
    else{
      document.getElementById("percent"+i).innerHTML = "invalid input";
    
    }
  }
}

function mean(){
  var sum=0;
  var count=0;
  for (var i = 1; i<=RowCount; i++){
    var numerator = document.getElementById("A"+i+"_num").value;
    var denominator = document.getElementById("A"+i+"_den").value;
    var percent = numerator / denominator;
    percent = Math.round(percent * 100) / 100;
    if (isFinite(percent)==true) {
      sum = sum + percent;
      count++;
    }
  }
  var mean = (sum / count) * 100;
  mean = Math.round(mean*100) / 100;
  document.getElementById('show').innerHTML = "Mean: " + mean + "%";
}

function weighted(){
  var sum = 0;
  var weightsum = 0;
  for (var i = 1; i<=RowCount; i++){
    var weight = document.getElementById("W"+i).value;
    var numerator = document.getElementById("A"+i+"_num").value;
    var denominator = document.getElementById("A"+i+"_den").value;
    var percent = numerator / denominator;
    //percent = Math.round(percent * 100) / 100;
    if (isFinite(percent)==true && weight>0) {
      sum = sum + percent*weight;
      weightsum = weightsum + parseInt(weight);
    }
  }
  var output = (sum / weightsum) * 100;
  output = Math.round(output*100) / 100;
  document.getElementById('show').innerHTML = "Weighted: " + output + "%";
}

