let game = []
game.points = new Decimal(0)
game.layers = [{
    startData:{
        unlocked:true,
        resource:new Decimal(0),
    },
    layouts:{
        contents:[
            {type:"main-display"},
            {type:"prestige-button"},
            {type:"blank", style:{height:"30px"}},
            {type:"display-text", text:"<h2>Hello Find!</h2>", style:{color:"yellow"}},
            {type:"blank", style:{height:"30px"}},
            {type:"upgrades"},
        ]
    },
    type:"normal",
    color:"rgb(128, 128, 128)",
    prestigeResource:"coins",
    prestigeButtonStyle:{
        backgroundColor() {
            return game.layers[0].color
        }
    }
}]

setInterval(() => {
    game.points = game.points.add(1)
    document.getElementsByClassName("istant")[0].innerText = "You Have " + game.layers[0].startData.resource + " " + game.layers[0].prestigeResource + "."
 }, 100);