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
    gameReq:new Decimal(10),
    req:new Decimal(10),
    gain:new Decimal(0),
    prestigeButtonStyle:{
        backgroundColor() {
            return game.layers[0].color
        }
    },
    upgrades:{
        11:{
            title:"Production",
            description:"x5 point gain.",
            cost:new Decimal(2),
            effect() {
                return new Decimal(5)
            },
            effectDesc() {
                return "x" + game.layers[0].upgrades["11"].effect();
            },
            bought:0
        }
    }
}]

function hasUpgrade(layerNum, id) {
    return game.layers[layerNum].upgrades[id].bought >= 1
}

document.getElementsByClassName("prestige")[0].onclick = () => {
    if (game.layers[0].gain.gt(1)) {
        game.layers[0].startData.resource = game.layers[0].startData.resource.add(game.layers[0].gain)
        game.points = new Decimal(0)
    }
}

setInterval(() => {
    game.points = game.points.add(1)
    game.layers[0].gain = game.points.pow(new Decimal(1).mul(game.layers[0].exponent)).div(game.layers[0].req).floor()
    game.layers[0].gameReq = game.layers[0].gain.pow(new Decimal(1).mul(game.layers[0].exponent)).mul(game.layers[0].req).floor()
    game.layers[0].upgrades["11"].effectDesc = () => {
        return "x" + game.layers[0].upgrades["11"].effect()
    }
    document.getElementById("number1").innerText = game.points
    document.getElementsByClassName("instant")[0].innerText = "You Have " + game.layers[0].startData.resource + " " + game.layers[0].prestigeResource + "."
    document.getElementsByClassName("prestige")[0].innerHTML = "Reset +" + game.layers[0].gain + " Coins.<br>Next at " + game.layers[0].gameReq + " Points."
    document.getElementsByClassName("upgradeTitle")[0].innerText = game.layers[0].upgrades["11"].title
    document.getElementsByClassName("upgradeDesc")[0].innerText = game.layers[0].upgrades["11"].description
    document.getElementsByClassName("currentlyUpg")[0].innerText = game.layers[0].upgrades["11"].effectDesc()
    document.getElementsByClassName("upgradeCost")[0].innerText = game.layers[0].upgrades["11"].cost
    document.getElementsByClassName("resourceName")[0].innerText = game.layers[0].prestigeResource
    document.getElementsByClassName("prestige")[0].style.backgroundColor = game.layers[0].prestigeButtonStyle.backgroundColor()
    document.getElementsByClassName("instant")[2].style.height = game.layers[0].layouts.contents[2].style.height
 }, 100);