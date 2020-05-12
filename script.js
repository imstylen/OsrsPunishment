window.onload = function()
{

     function pButton()
     {

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
               "Give %teammate% 100k",
               "Repair a set of %teammate% ('s) barrows armor",
               "Do a trip at vorkath, and give all the loot to %teammate%",
               "Run from edgville to mage bank without the lever.",
               "Chop 10 of the highest tier logs you can with a bronze axe",
               "Suicide at wintertodt while autochatting 'The cold never bothered me anyway'."
          ]

          var punishmentText = "";

          var teammateString = document.getElementById("teammates").value;

          var randomPunishment;

          if(teammateString != "")
          {
               randomPunishment = punishments[Math.floor(Math.random()*punishments.length)];
               teammateArr = teammateString.split(",");
               punishmentWordArr = randomPunishment.split(" ");

               var x;
               for (x in punishmentWordArr)
               {
                    if (punishmentWordArr[x] == "%teammate%")
                    {
                         punishmentWordArr[x] = teammateArr[Math.floor(Math.random()*teammateArr.length)];
                    }
               }

               randomPunishment = punishmentWordArr.join(" ");
          }
          else
          {

               var lookAgain = true;
               while(lookAgain)
               {
                    randomPunishment = punishments[Math.floor(Math.random()*punishments.length)];
                    lookAgain = randomPunishment.includes("%teammate%");
               }

          }

          document.getElementById("punishment").innerHTML = randomPunishment;
     }

     document.getElementById ("punishment-button").addEventListener ("click", pButton, false);

}
