📌 What is Hoisting?
• Hoisting is JavaScript's behaviour of moving declarations (not initializations) to the top of their scope during the Memory Allocation Phase of execution.

    • It applies to both variables and functions, but they behave differently.

🧠 Execution Context & Memory Phase
Before any code runs:
• Variables declared with var are hoisted and initialized with undefined.

    • Function declarations are hoisted with their full definition (i.e., they’re ready to be invoked).

    • let and const are hoisted too, but they remain in a Temporal Dead Zone (TDZ) until their actual declaration line is reached.

🔍 Example Breakdown

console.log(x); // undefined

console.log(getName); // function definition

var x = 7;

function getName() {

    console.log("Namaste Javascript");

}

Memory Phase:

    • x → undefined

    • getName → function object

Execution Phase:

    • Logs undefined for x (because it's hoisted but not yet assigned).

    • Logs the full function for getName (because it's hoisted with its body).

⚠️ Common Pitfalls

    • Function expressions (e.g., var foo = function() {}) are treated like variables: hoisted as undefined.


    • Accessing let or const before declaration throws a Reference Error due to TDZ.

🧪 Interview Tip

    “Hoisting is not about moving code. It’s about how JavaScript allocates memory before execution.”

🔁 Function Declaration vs Arrow Function in Hoisting

Type Hoisted? Initialized During Memory Phase? Behavior Before Declaration

function getName() ✅ Yes ✅ Fully initialized Can be called

var getName = () => ✅ Yes ❌ Only undefined assigned Throws TypeError if called

🧪 Example Comparison

console.log(getName); // undefined

getName(); // ❌ TypeError: getName is not a function

var getName = () => {

    console.log("Namaste Javascript");

};

Why?

    • The variable getName is hoisted as undefined.

    • The arrow function assignment happens during the execution phase.

    • So calling it before the assignment results in a TypeError.

🗣️ Interview Explanation tips

    “In JavaScript, function declarations are hoisted with their full definition, so they’re callable before their line of declaration. But arrow functions assigned to variables behave like any other var—they’re hoisted as undefined. So if you try to invoke them before the assignment, you’ll get a TypeError, not just undefined.”


    ✅ What Your Code Shows

    console.log(getName); // function or undefined

    var x = 10;

    function getName() {

    console.log("Function Declaration: Namaste JavaScript");
    }



var getArrowName = () => {console.log("Arrow Function: Namaste JavaScript");
};

    🧠 Interview Explanation (Simple & Clear)


        "In JavaScript, during the memory allocation phase, function declarations are hoisted with their full definition, so they’re available before their line of declaration. That’s why getName logs as a function."


        "But arrow functions assigned to variables behave like regular var declarations — they’re hoisted as undefined. So if I try to call getArrowName() before its line, I’ll get a TypeError because it's not yet a function."



    🔥 Bonus Line for Impact

        "Hoisting doesn’t move code — it’s just how JavaScript sets up memory before execution. Function declarations are ready to run early, but arrow functions aren’t."

    🧪 Optional Add-on (if they ask about let/const)

        "let and const are also hoisted, but they stay in a Temporal Dead Zone until their actual declaration. Accessing them early throws a ReferenceError."





