var recipe = [{
        solution : "Sodium Chloride",
        amount: "5 mL",
        instrument: "Graduated Cylinder"   
    },
    {
        solution : "Hydrochloric Acid",
        amount: "250 mL",
        instrument: "Boiling Flask"   
    },
    {
        solution : "Water",
        amount: "100 mL",
        instrument: "Erlenmeyer Flask"   
    },
    {
        solution : "Liquid Mercury",
        amount: "2 mL",
        instrument: "Pipette"   
    },
    {
        solution : "Sulfate",
        amount: "500 mL",
        instrument: "Volumetric Flask"   
    },
    {
        solution : "Phosphoric Acid",
        amount: "30 mL",
        instrument: "Beaker"   
    },
];

function helpJesse(){
    for (i=0; i<recipe.length; i++){
        console.log(i+1+". Pour "+recipe[i].amount+" of "+recipe[i].solution+" into a "+recipe[i].instrument)
    }
}

helpJesse();