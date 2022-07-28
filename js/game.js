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
    }
}]