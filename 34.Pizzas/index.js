//Question:no.34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza
// creating array of pizzas name
var favoritePizzas = ["Fajita", "BarBque", "Tikka"];
//using for loop
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log(" i like ".concat(pizza, " pizza"));
}
;
//add line outside the for loop
console.log("Tikka is simply amazing");
console.log("Fajita and BarBque is in my favourite list");
console.log("i really love pizza");
