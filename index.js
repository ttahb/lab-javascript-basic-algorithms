// Iteration 1: Names and Input

let driverName = "Ned Stark";
console.log(`The driver's name is ${driverName}`);

let navigatorName = "Jon Snow";
console.log(`The navigator's name is ${navigatorName}`);

// Iteration 2: Conditionals
if(driverName.length > navigatorName.length){
    console.log(`The driver has the longest name, it has ${driverName.length} characters.`)
} else if( driverName.length < navigatorName.length){
    console.log(`It seems that the navigator has the longest name, it has ${navigatorName.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${driverName.length} characters!`);
}

// Iteration 3: Loops

//3.1
let driverName2 = "";
for(let i=0; i<driverName.length - 1; i++){
    driverName2 += driverName[i].toUpperCase() + ' ';
}
driverName2 += driverName[driverName.length -1].toUpperCase();

console.log(`The driver's name in capitals and with space between letters is ${driverName2}`);

//3.2
let reversedNavigatorName = "";
for(let i=navigatorName.length-1; i>=0; i--){
    reversedNavigatorName += navigatorName[i];
}

console.log(`Navigator's name in reverse is ${reversedNavigatorName}`);

//3.3
//console.log(driverName.localeCompare(navigatorName));
let bool = driverName.localeCompare(navigatorName);
if(bool === 1){
    console.log("Yo, the navigator goes first, definitely.")
} else if(bool === -1){
    console.log("The driver's name goes first.");
} else {
    console.log("What?! You both have the same name?");
}

