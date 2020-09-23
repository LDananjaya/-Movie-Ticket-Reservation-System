
function validation() {

    console.log("sdfsfsdfsf");
    var Date = document.getElementById('txt_Date');
    var Theater = document.getElementById('the');
    var showTime = document.getElementById('sho');
    var Movie = document.getElementById('mov');

    var valid = true;
    valid = Empty(Date.value.length, "Date must required");
    if (valid == true) {
        valid = Empty(Theater.value, "please enter Theater");
        if (valid == true) {
            valid = Empty(showTime.value, "Time must required");
            if (valid == true) {
                valid = Empty(Movie.value, "please enter Movie");
                if (valid == true) {
                    alert("successfully");
                }
            }
        }
    }

}

function Empty(value, message) {
    if(value ==0)
    {
        alert(message);
        return false;
    }
    return true;
}
