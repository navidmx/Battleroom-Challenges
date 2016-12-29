function reverseWord(str){
  console.log(str.split("").reverse().join(""));
}

//Let's go through this with the example "Hello"
//.split("") creates an array out of the string, breaking at each character: [H, e, l, l, o]
//.reverse() flips the order of the array: [o, l, l, e, H]
//.join() joins the string at each character: olleH