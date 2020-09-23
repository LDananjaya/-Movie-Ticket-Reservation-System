
// var divPos = [0, 87.5, 175, 262.5, 350, 437.5, 525, 612.5];

// var elementPieces = {
//     getElement: function (i, j) {
//         return $("<div>", {id: "div-element" + (i + 1) + "" + (j + 1)});
//     },
//     setElement: function (i, j) {
//         $("#div-element" + (i + 1) + "" + (j + 1)).css("position", "absolute");
//         $("#div-element" + (i + 1) + "" + (j + 1)).addClass("chessArea");
//     },
//     setColor: function (i, j, elementColor) {
//         $("#div-element" + (i + 1) + "" + (j + 1)).css("background-color", elementColor);
//         $("#div-element" + (i + 1) + "" + (j + 1)).css("border-style", "none");
//     },
//     setSize: function (i, j, size) {
//         $("#div-element" + (i + 1) + "" + (j + 1)).css("top", divPos[i] + "px");
//         $("#div-element" + (i + 1) + "" + (j + 1)).css("left", divPos[j] + "px");
//         $("#div-element" + (i + 1) + "" + (j + 1)).css("width", size);
//         $("#div-element" + (i + 1) + "" + (j + 1)).css("height", size);
//     },
// };

// for (var i = 0; i < 8; i++) {
//     for (var j = 0; j < 8; j++) {
//         if (i % 2 != 0) {
//             if (j % 2 != 0) {
//                 var colorElement = "rgba(255,218,103,1)";
//             } else {
//                 var colorElement = "rgba(136,94,0,1)";
//             }
//         } else {
//             if (j % 2 != 0) {
//                 var colorElement = "rgba(136,94,0,1)";
//             } else {
//                 var colorElement = "rgba(255,218,103,1)";
//             }
//         }
//         $("#div-board").append(elementPieces.getElement(i, j));
//         elementPieces.setElement(i, j);
//         elementPieces.setColor(i, j, colorElement);
        
//     }
// }


var odcValue = document.getElementById("odc").value;
var i;
for(i=0;i <odcValue ;i++){

    var para = document.createElement("button");

    //document.getElementById("MyElement").classList.add('MyClass');
    document.getElementsByTagName('button').addclass("buttonclass");
    document.getElementsByClassName("buttonclass").style.color = "blue";
    document.getElementById("seat").appendChild(para);

}

// var para = document.createElement("P");
//     var t = document.createTextNode("This is a paragraph.");
//     para.appendChild(t);
//     document.getElementById("myDIV").appendChild(para);