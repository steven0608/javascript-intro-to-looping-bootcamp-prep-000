function forLoop(array){
  for(let i=0;i<25;i++){
    if(i===1){
    array.push("I am 1 strange loop.")
    }else{
    array.push("I am ${i} strange loops.")
    }
  }
  return array;
}
function whileLoop(n){
  while (n>0){
    console.log(--n);
  }
  return "done"
}

function doWhileLoop(array){
do { function maybeTrue(){
  return Math.random() >= 0.5}}

while (array.length>0&&maybeTrue(array)){
  array.shift([1])
}
return array;
}
