# Layer
I Fist so think:
```js
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
            {type:"upgrades"},
        ]
    },
    type:"normal",
    color:"magenta",
    prestigeResource:"blah",
    exponent:0.75,
    gameReq:new Decimal(10),
    req:new Decimal(10),
    gain:new Decimal(0),
    prestigeButtonStyle:{
        backgroundColor() {
            return game.layers[0].color
        },
        fontFamily() {
            return "Comic Sans MS"
        }
    }
}]
```
### FEATURES
- StartData: Get Start datas for variable want your get possible what moment.
- layouts:Get this layouts data custom tab layouts. Want get link:[Layout's Markdown](layouts.md)
#### SUPPORT'S TYPES
- normal:get normal than this get normals.
- custom:at custom find these game so supported.
- mulitiplying:mulitiplying formula is than `new Decimal.pow(2, x)`.
- color: than be color supported be know _STATICK COLOR_ (rgb, rgba)
- prestigeResource: Be so resource be than see names of variable.
- exponent: I strongers think so see get platfromer is Exponentating yield decimal.
- gameReq:A be so get sindhere get everyone to confing of req
- req: at be req than see everyone to get.
- gain: A be gain stronger gain for req of formula is $\text{floor}(x_1^\frac{1}{x_2} \times x_3)$
- prestigeButtonStyle: can be prestige button style functions! *Powerd Haha*
### OTHER COMPONENTS
- upgrades: i think so get so upgrades tag than see. Want get link:???
- buyables: get buyable than big effect of now. Want get link:???
- milestones: Want this milestone givens this! Want get link:???
- clickables: so clickables in clicked. Want get link:???
- achievements: oh get achievement tabs want achievement completed. Want get link:???