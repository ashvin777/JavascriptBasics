//libs
console.green = function(text){
  console.log("%c"+text, "color: green; font-weight: bold");
}

console.header = function(text){
  console.log("%c"+text, "color: black; font-weight: bold; font-size: 18px")
}

console.function = function(text){
  console.log("%cFunction: "+text, "color: blue; font-size: 10px")
}

console.class = function(text){
  console.log("%cClass: "+text, "color: gray; font-size: 10px; font-weight: bold")
}

console.msg = function(text){
  console.log("%c\n"+text, "color: purple; font-size: 14px; font-weight: bold;");
}