
console.log("Before declarations:");
console.log(getName); // function or undefined
//getName();         // Uncomment to test behavior

var x = 10;

function getName() {
    console.log("Function Declaration: Namaste JavaScript");
}

var getArrowName = () => {
    console.log("Arrow Function: Namaste JavaScript");
};

console.log("After declarations:");
getName();        // ✅ Works
getArrowName();   // ✅ Works