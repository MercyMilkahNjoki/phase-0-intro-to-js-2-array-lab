// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}
console.log (cats);

function destructivelyPrependCat(){
    cats.unshift("Bob");
}
console.log (cats);

function destructivelyRemoveLastCat(){
    cats.pop();
}
console.log (cats);

function destructivelyRemoveFirstCat(){
    cats.shift();
}
console.log (cats);

function appendCat(name){
    return [...cats, name];
}
function prependCat(name){
    return [name, ...cats];
}
function removeLastCat(){
    return cats.slice(0, cats.length-1);
}
function removeFirstCat(){
    return cats.slice(1);
}
