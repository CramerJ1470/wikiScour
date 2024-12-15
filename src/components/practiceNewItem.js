let newItem = {};

let newItemKey = "schoolname";

newItem.schoolname = "hello kitty";
console.log(newItem);
// Object.defineProperty(newItem,newItemKey, {value: "hello kitty"});
console.log(newItem);
let newValue;
if (newItem.hasOwnProperty(newItemKey)) {console.log("hasOwnProperty");let oldValue = newItem[newItemKey] +","+ "added on this bit"; newItem[newItemKey]= oldValue;} else {newValue = "not adding on"; Object.defineProperty(newItem, newKey, {value:newValue});} 
console.log("item: ", newItem);