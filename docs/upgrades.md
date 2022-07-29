# Upgrades
### AS AFFACTED UPGRADES NOW:
```js
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
```
### FEATURES
- BuyUpgrade(layernum, id): use always this now.
- hasUpgrade(layernum, id): use thrown boolean this upgrade.
- title: A be title from product.
- description: i be description
- cost: a be cost from "Decimal" base with formula is $\log_{10}(C^2)$ than defalut is $10$ (Variables update generating a error), $\sqrt{U_{C_{11}}}$ if be so get!
- effect():I am stronger a effect deault is $2$ be so ($1.01$ at $10^{10^{36}}$.)
- effectDesc():Effect Descriptioning support tags for `document.getElementById(...).innerHTML = //text` text of tags than Sup (a<sup>2</sup>, <span style="color:yellow;">a Thing Yellow!</span>) 
- bought:I am _<span style="border-style:solid;">I Think Solid.</span>_ I so than be see than scores than completed than <span style="font-family:Comic Sans MS;">1</span> at ended for <span style="font-family:Comic Sans MS;">0</span> (<span style="font-family:Comic Sans MS;">Generaic At Upgrade!</span> )
#### <span style="font-family:Arial;text-align:center;">Latest I Showed!</span>