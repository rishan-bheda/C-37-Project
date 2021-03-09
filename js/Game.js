class Game {

    constructor(){}
  
    getState(){

        var gameStateRef  = database.ref('gameState');

        gameStateRef.on("value",function(data){

            gameState = data.val();
       
        })
    
    }

    update(state){

        database.ref('/').update({

            gameState: state

        });

    }

    async start(){

        if(gameState === 0){

            player = new Player();
            
            var playerCountRef = database.ref("playerCount").once("value")

            /*if(playerCountRef.exists()){

                playerCount = playerCountRef.val();

            }*/


            player.getCount();
            
            form = new Form()
            form.display();

        }
    }

    play(){

        form.hide();
        
        Player.getPlayerInfo();

        textSize(25);
        text("Game Start", 100, 100);


        if(allPlayers !== undefined){

            var display_pos = 130;

            for(var plr in allPlayers){
                
                if (plr === "player"+player.index)

                  fill("red");

                else
                
                  fill("black");

                display_pos = display_pos+20;

                text(allPlayers[plr].name+" : "+allPlayers[plr].distance,100,display_pos);

            }
          
        }

        if(keyIsDown(UP_ARROW)){

            player.distance = player.distance + 50;

            player.update();

        }
    
    }

}
