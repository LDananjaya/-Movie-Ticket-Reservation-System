function checkFunction() {
    console.log("sdssdsd");
    validOdc();
    validGallery();
     totCalculationOdc();
    totCalculationGallery();
}

function validOdc() {
    var x = document.getElementById("txt_odc");
    var l = document.getElementById("txt_kids");
    var m = document.getElementById("txt_adult");

    var total = +l + +m;
    if (x < total) {
        document.getElementById("msg").innerHTML = "Please input the valid amount";
    }
    else {
        document.getElementById("msg").innerHTML = "";
    }
}
function validGallery() {
    
    var y = document.getElementById("txt_gallery").value;
    var n = document.getElementById("txt1_kids").value;
    var h = document.getElementById("txt1_adult").value;
    var total = +n + +h;

    if (y < total) {
       
        document.getElementById("msg1").innerHTML = "please input the valid amount";
    }
    else {
        document.getElementById("msg1").innerHTML = "";
    }
}

function totCalculationOdc() {
    var odc = document.getElementById("txt_adult")
    var kidsOdc = 2;// value should take from database
    var adultOdc = 2; // value should take from database
    var tot = +(kidsOdc * 300) + +(adultOdc * 600);
    document.getElementById("msg").innerHTML = "Your total: " + tot;
}

function totCalculationGallery() {
    var kidsGallery = 2;// value should take from database
    var adultGallery = 2;//value should take from database
    var tot1 = +(kidsGallery * 400) + +(adultGallery * 800);
    document.getElementById("msg1").innerHTML = "Your total: " + tot1;

}