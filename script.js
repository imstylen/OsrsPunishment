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
               "Do #2-5# Vorkath kills, and give all the loot to %teammate%",
               "Give %teammate% #20-200# k.",
               "Trade someone killing cows #10-50# k, and then say scammed and run away",
               "Sell %teammate% your current stack of superior dragon bones for #75-90# % price",
               "%teammate% picks your punishment",
               "Crash a team at corp while wearing really bad gear, but suicide before the kill is over. (Bonus points if you ask for split before you die.)",
               "Go to god wars dungeon, and ask people for god items so you dont die.",
               "Tell someone in really good gear: 'Nice combat bracelet, noob'",
               "Buy a lumbridge tele from someone in lubridge bank.",
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

          punishmentWordArr = randomPunishment.split(" ");
          var x;
          for (x in punishmentWordArr)
          {
               if (punishmentWordArr[x].charAt(0) == "#" && punishmentWordArr[x].charAt(punishmentWordArr[x].length - 1) == "#")
               {
                    punishmentWordArr[x] = punishmentWordArr[x].replace(/#/g,"");
                    boundArr = punishmentWordArr[x].split("-");
                    lowerBound = parseInt(boundArr[0]);
                    upperBound = parseInt(boundArr[1]);

                    randomN = Math.floor(Math.random()*(upperBound - lowerBound+1)) + lowerBound;

                    punishmentWordArr[x] = randomN.toString();
               }
          }

          randomPunishment = punishmentWordArr.join(" ");

          document.getElementById("punishment").innerHTML = randomPunishment;
     }

     document.getElementById ("punishment-button").addEventListener ("click", pButton, false);

}
