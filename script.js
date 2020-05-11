function pButton() {
     alert('click!');
     document.getElementById("punishment").innerHTML = "red";
}


document.getElementById ("punishment-button").addEventListener ("click", pButton, false);
