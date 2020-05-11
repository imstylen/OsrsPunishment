window.onload = function() {

     function pButton() {

          var punishments =
          [
               "Go to world 302 and spam buying combat bracelet until someone sells you one.",
               "Kill Zulrah with a setup costing less that 500k total. If you fail, roll again.",
               "Kill Vorkath with a setup costing less that 500k total. If you fail, roll again.",
               "Change character to a female for 24 hours.",
               "Trade a level 126 a combat bracelet and say 'You look like you can use this..'",
               "Buy an inventory of cowhides in lumbridge, then drop them.",
               "Ask someone at barrows what the drop rate of barrows gloves is.",
               "Fish for 10 minutes.",
               "Mine for 10 minutes.",
               "Go to chaos dwarves in a populated world. Kill one and say 'sit'.",
               "Ask someone with a pet when summoning was released.",
          ]

          var randomPunishment = punishments[Math.floor(Math.random()*punishments.length)];

          document.getElementById("punishment").innerHTML = randomPunishment;
     }

     document.getElementById ("punishment-button").addEventListener ("click", pButton, false);

}
