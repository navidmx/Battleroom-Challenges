function hypotenuse(a, b){
    c = Math.sqrt((a*a)+(b*b));
    console.log("c = "+c);
}

function leg(a, c){
    b = Math.sqrt((c*c)-(a*a))
    console.log("b = "+b);
}