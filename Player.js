class Player{
    constructor(){}

    getCount(){
    //pcr=playerCountRef
    var pcr=database.ref('playerCount');
    pcr.on("value", function(data){
        playerCount=data.val();
    })
    }

    updateCount(count){
    database.ref('/').update({
        playerCount:count
    });
    }

    update(name){
    var playerIndex="player"+playerCount;
    database.ref(playerIndex).set({
        name:name
    });
    }
}