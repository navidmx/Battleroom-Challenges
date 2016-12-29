function factorial(x){
    if (x==0){
        return 1;
    }
    else{
        x = x * factorial(x-1);
        return x;
    }
}

console.log(factorial(5));