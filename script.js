var entry = document.getElementById("entry");

entry.addEventListener("click",displayDetails);

var row = 1  ;


function displayDetails () {
    var namn = document.getElementById("namn").value;
    var langd = document.getElementById("langd").value;
    var datum = document.getElementById("datum").value;
    
    if (!namn || !langd || !datum) {
        alert("Fyll i alla fält din jävla UXDesigner!");
            return;
    }

var display = document.getElementById("display");

var newRow = display.insertRow(row);

var cell1 = newRow.insertCell(0) ;
var cell2 = newRow.insertCell(1) ;
var cell3 = newRow.insertCell(2) ;

cell1.innerHTML = namn;
cell2.innerHTML = langd;
cell3.innerHTML = datum;

row++;

}