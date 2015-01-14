// Avatar changing javascript code - adapted from Mobile Development Activity and Workshop code

var changePic = 0;



function picSwap() {

   

if (changePic <= 0 ) {

    document.getElementById("picOne").src="img/girl1.jpg";

    changePic ++;
}
else if (changePic <= 1 ) {

    document.getElementById("picOne").src="img/boy1.jpg";

    changePic ++;
}
else if (changePic <= 2) {

    document.getElementById("picOne").src="img/girl2.jpg";

    changePic ++;
}
else if (changePic <= 3) {

    document.getElementById("picOne").src="img/boy2.jpg";

    changePic ++;
}
else if (changePic <= 4) {

    document.getElementById("picOne").src="img/girl3.jpg";

    changePic ++;
}
else if (changePic <= 5 ) {

    document.getElementById("picOne").src="img/boy3.jpg";

changePic = 0
}

}

// Name and address logging code - adapted from Mobile Development Activity and Workshop code


function domManip1() {

    var userName = document.getElementById('userName').value;
    document.getElementById('nameBox').innerHTML = userName;

}

function domManip2() {

    var userFrom = document.getElementById('userFrom').value;
    document.getElementById('fromBox').innerHTML = userFrom;

}