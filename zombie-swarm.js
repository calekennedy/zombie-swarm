/*                                                                                
                                   `.-::.`                                      
                                 -smNNdNmNh/                                    
                                /NMMMmhMMMMMs                                   
                             `/:NMMMMmNMMMMMM.                                  
                             /NNMNNMMmMMMMMMN.                                  
                             hMhNo:hmdNmMMMMs                                   
                             /NdodNNNMN++hMMh.                                  
                            `oMNdNNyhMMNNNMMNhy+-`                              
                          :ymdMMNmNNNMMMMMMMMMMMNNh+:`                          
                      `/hdNMMNNMNmdmNMMMMMMMNNMmNNdNNmo`                        
                     -yNNmNNMMMMhhNMNMMMMMMMNMMMMMMNNmNh`                       
                    -mNMMNMMMNMNNyMMMMMMMMMMMMMMMMNmMNMMh.                      
                   `yMmmMMMMMNMMNNN ZOMBIE MMMMMMMMMMMMMMm.                     
                   :mMMMMMNMMMNMNNMMMMMMMMMMMMMMMMMMMMMMNNs:`                   
                 .oNMMNMMMMMMMNMMMNNMNMNMMNNMNMMMMMMMmNNMNMMN/                   
                /mNNNdmmNMMNMMNMMMMmMMMNmmmMMMMMMMMMMMNmNMMMNds.                
               /mmMMMmmNMMMmmNMMNNmMMNmmmNmMMMMMMMMMMMMmNMMMMMMd-               
             `:mMNMMNNmNNmMMMMNNmNMMMMNmdNNMMMMMMMMysmMMMNMMMMMMNy:             
             +dNMMMNmNMm//NMMNNMNmMNmMmmNMNMMMMNMMMh``/dNNNMMmdMMMd`            
           `ohdNMMMNNNm: `dMMMMMMMMNNMNNNMMMMMMMMMMN`  `yNNNNmmNMMN-            
           +NNmNMMMMMd:   hMMMMMMMMMNMNmNMMMMMmMNMMM.   ./ydNNNMMMM+            
          .mNNNMMMMMo`    oNNMMNMNNNNMMNmNMMNMNMNMMy       -hNMMMMMo            
           yMNNMMMMh`     `hMNNNMMMMmNNMMMMMNMMMMMM:        :MMMMMMo            
           :NNMMMMh`       mMMMNNNNNMMMMMMMNNMMMMMMd-       .mMMMMMo            
           :NMMMMMy        yMMMmdmNNMNMMNNMNNMMMMMMM+       hMMMMMMd`           
           :NNMMMMh`       +MMMNmNMMNNMMMNMNMMMMMNMM:      .NmmmdNMM+           
           +NNMMMMMo`      +mMNmMMMMMMMMNNMNNMMMMNMM:      /MsoNNNMMm`          
          `dNNNMMhhNy`     yNNMMMMNNdNMMMMMNNMMMNNNMs      od:omddMNh`          
         `yMMmmNm-`yN.    `mMMMMMMdNNMMMMMMNmNMMNNNMd      .``mmomMN-           
         `NdMMhyms .:`    sMMMMmMMMMMMMMMMMMNNMMMMMMM`      `oMdsMMo            
          yMMMh-yNs-     :MMMMMMMMMMMMMMMMMMMMMMMMMMM:      -ms:Ny/`            
          .sMMM.`:yd/    /MMMMMMNMMMMMMMMMMMMMMMMMMMMo       . ./`              
           `odN+   .`    :MMMMMMMMMMMMMNNMMMMMMMMMMMMs                          
             `-.         odNMMMMMMMMMMMNNMMMMMMMMMMNMy                          
                        `ydMMMNMNMNMMMMMMMMMMMMMMMMMMh                          
                        -NMMNNmNdmMMMMMNMMMMMMMMMMMMMd                          
                        .NMNdmdmhdMMMMMMMNNMMMMMmmMMMm                          
                         sNNNMMNNNMMMMMMMMNMMMNNNdNMMN`                         
                         :mdmMMMMmNMMMMmhMMMMMNNMNNNMMo                         
                         .mNMMNNdymMMMN/.mMMMMMmmNydNMm                         
                         -mNMNNNNNMMMN+  :NmMNNNMMMNdNN`                        
                         :NNmshmyymMMm`   smmhymNMMNNMN.                        
                         +mMMNmmdyNMMMo   -NhdmdNMMMMMM/                        
                         oMNdmNMNMMMMM:    mNdNNNNMMMMMd.                       
                         hNddNMmmmdNMd`    dNhNdymNNNMMM/                       
                         dMMMMmNNNNNN:     yMMMNmNMMMMMM+                       
                         yMMMMNNmmMMo      -NMMMMNmNMMMMm+                      
                         yMMMMMMMMMh        -yymMNmhNMMMMN:                     
                        -NMMMMMMMMMy         `:hMMNNMMMMMMm:                    
                       .dMMMMMMMMMM:           `hymMNMMMMMMNy.                  
                      .yMMMMMMMNyNN`            +mdmNMMMMMMMMo                  
                      oMMmmmNNNNhyM/            .mMMMMMMMMMMMN:                 
                      -NMdhyNdyNMdNy             :hNMMMMMMMMMMy                 
                      `mMMNMMNmNMMM/               :hNMMMMMMMMd`                
                       dMMNMMMmNMMd`                 oMMMMMMMMMh`               
                       hMNMNMNdmMMs                  `yMMMMMMMMMo               
                       oMMNNNNNMMMy                   `sNMMMMMMMh`              
                       +MMMhhmmMMMs                     +NMMMMMMM+              
                       :MMMNyhMMMMo                     `hMMMMMMMd`             
                       -NMMMNmMMMMs                      oMMMMMMMN-             
                       `hMMMMNMMMMd                    `oNNMMMMMN+              
                        -NMMMMMMMMM`                  -yNdmMMMMN/               
                        .mNMMMNNMMM:                 `NMMMmNMMM+                
                         +MMNMhhNMM/                 `dNMMMNNh/                 
                        `dMMMMMMMNs.                   .-::.`                   
                       `yMMMhdMNo`                                              
                      -dMMmmMMMd`                                               
                      sNMMmNMMNo                                                
                      -ymmNmds.                                                 
                         ``                                                  
*/

/*******************************************************************************
////////////////////////////// THE ZOMBIE SWARM ////////////////////////////////
*******************************************************************************/

var Browser = require('zombie')
	, async = require('async')

// What url are you trying to zombie on?
var target = 'http://reddit.com/' //f5? lolwut...

// How big is the zombie horde?
var sizeOfHorde = 10

// Summon the zombie horde!
var zombies = []
for(i = 0; i < sizeOfHorde; i++){
	var zombie = {
		number: i,
		target: target,
		name: 'zombie' + i,
		email: 'zombie' + i + '@nomnomnom.com',
		password: 'eat-moar-brainz' + i
	}
	zombies.push(zombie)
}

// This is what zombies do
var zombieAttack = function(zombie, callback){	
  
  console.log(zombie.name + " is attempting to find brains to eat")

  var initalTime = new Date().getTime()

  // Load the page located at the url
  var browser = new Browser()
	browser.visit(zombie.target)

    // Promise to be executed when page loads
    .then(function(){

      // Looks like the zombie found brains :)

      // The zombie browser can read the page.
      var title = browser.html("title") 
      console.log(title)

      // How long did it take the zombie to find brains to eat?
      var ms = new Date().getTime() - initalTime
      console.log(zombie.name + " has found some brains after " + ms + "ms")

      // Call back into the async.each function and let it know zombie survived
      return callback(null)

      /*
      The zombie browsers can also be used to input form data and submit.
      After submission we get a nice callback. 
      ~~~ SORRY @O_U_Confessions ~~~

      browser.fill("tweet-input", "@" + zombie.name + " you're a party animal")
      .clickLink("[href='/tweet']", function(){
        console.log(zombie.name + " attack successful")
        return callback(null)
      })
      */
      
    })

    // Promise to be executed on rejection
    .fail(function(err){
      // Someone brought a shotgun to the zombie party :(
      // Let async.each know that a zombie has died.
      return callback(err)
    })
}

// This is what makes the zombies go
var zombieSwarm = function(){

  // Send each zombie in the swarm to do its job
  async.each(zombies, zombieAttack, function(err){
  if(err)
    // If a zombie dies, the horde should learn from its mistakes.
    console.log("Zombie Swarm Error: " + err)
  else
    // No zombies died. The horde was victorious!
    console.log("Zombie Swarm Success!")
  })
}

// Run
zombieSwarm()



