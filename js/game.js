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
    exponent:0.5,
    req:new Decimal(10),
    prestigeButtonStyle:{
        backgroundColor() {
            return game.layers[0].color
        }
    }
}]

setInterval(() => {
    game.points = game.points.add(1)
    game.layers[0].gain = game.points.pow(new Decimal(1).times(game.layers[0].exponent)).div(game.layers[0].req)
    document.getElementsByClassName("instant")[0].innerText = "You Have " + game.layers[0].startData.resource + " " + game.layers[0].prestigeResource + "."
    document.getElementsByClassName("prestige")[0].innerHTML = "Reset +" + game.layers[0].gain + " Coins.<br>Next at " + game.points.pow(new Decimal(1).times(game.layers[0].exponent)).div(game.layers[0].req) + " Points."
    document.getElementsByClassName("instant")[2].style.height = game.layers[0].layouts.contents[2].style.height
 }, 100);