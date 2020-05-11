
window.onLoad = function()
{
     document.getElementById("punishment-button").onClick = function pButton()
     {
          alert('click!');
          document.getElementById("punishment").innerHTML = "red";
     }
}
