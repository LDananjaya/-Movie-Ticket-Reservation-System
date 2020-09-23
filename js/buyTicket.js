var i, topbarpanel, topbarbtn;



function openPanel(evt, panelName) {

    topbarpanel = document.getElementsByClassName("topbarpanel");

    for (i = 0; i < topbarpanel.length; i++) {

        topbarpanel[i].style.display = "none";

    }
    topbarbtn = document.getElementsByClassName("topbarbtn");

    for (i = 0; i < topbarbtn.length; i++) {

        topbarbtn[i].className = topbarbtn[i].className.replace(" active", "");

    }
    document.getElementById(panelName).style.display = "block";

    evt.currentTarget.className += " active";
}

document.getElementById("activ").click();

// 