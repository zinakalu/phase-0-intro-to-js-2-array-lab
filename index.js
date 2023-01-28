// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(name){
  cats.push(name);
}
destructivelyAppendCat('Buga');


function destructivelyPrependCat(name){
  cats.unshift(name);
}
destructivelyPrependCat("Timi");

function destructivelyRemoveLastCat(){
  cats.pop();
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
  cats.shift();
}
destructivelyRemoveFirstCat();

function  appendCat(name){
  let newCats = cats.slice();
  newCats.push(name);
  return newCats;
}
appendCat("fluffy")

function  prependCat(name){
  let newCats = cats.slice();
  newCats.unshift(name);
  return newCats;
}
prependCat("shadow")

function removeLastCat(){
  let newCats = cats.slice();
  newCats.pop(name);
  return newCats;
}
removeLastCat();

function removeFirstCat(){
  let newCats = cats.slice();
  newCats.shift();
  return newCats;

}
removeFirstCat();