var squad = [{
        name : "Leonard",
        status : "Married"   
    },
    {
        name : "Penny",
        status : "Married"   
    },
    {
        name : "Howard",
        status : "Married"   
    },
    {
        name : "Bernadette",
        status : "Married"   
    },
    {
        name : "Sheldon",
        status : "In a relationship"   
    },
    {
        name : "Amy",
        status : "In a relationship"   
    },
    {
        name : "Raj",
        status : "Single"   
    }
];

function manCave(){
    for (i=0; i<squad.length; i++){
        if (squad[i].name=="Penny"||
            squad[i].name=="Bernadette"||
            squad[i].name=="Amy"){
            squad.splice(i, 1);
        }
        if (squad[i].status!="Single"){
            squad[i].status="Single";
        }
    }
    return squad;
}

console.log(manCave());