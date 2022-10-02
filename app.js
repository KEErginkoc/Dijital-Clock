function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0){
        h = 12;
    }

    if (h > 12){
        h = h - 12;
        var session = "PM";
    }

    // h=(h<10) ? "0" + h : h;
    if(h<10){
        h= "0"+h
    }
    else{
        h=h 
    }
   
    m=(m<10) ? "0" + m : m;
    s=(s<10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("ClockDisplay").innerHTML = time;
    document.getElementById("ClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();
