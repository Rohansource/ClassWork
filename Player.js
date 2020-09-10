class Player{
        constructor(){
            this.distance = 0;
            this.index = null;
            this.name = null;
    
        }
  
      getCount(){
          var countRef = database.ref("playerCount");
          countRef.on("value", (data)=>{playerCount = data.val();})
      }
  
      updateCount(count){
          database.ref("/").update({playerCount: count});
      }
      update(){
          var playerIndex = "players/player" + this.index;
          database.ref(playerIndex).set({name: this.name, distance: this.distance});
          
      }

      static getPlayerInfo(){
        var infoRef = database.ref("players");
        infoRef.on("value", (data)=>{allPlayer = data.val();})
      }

}