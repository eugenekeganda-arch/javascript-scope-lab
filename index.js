// Write your solution in this file!
// global variables
let burgers = ['hamburger', 'cheeseburgeer'];
let featuredDrink = 'Strawberry Milkshake';


//the add burger function
function addBurger() {
    var newBurger = 'Flatbuger';
    burgers.push(newBurger);

}
addBurger();
console.log(burgers);


//the block scope
if (true) {
    let anothernewBurger = 'Maple Bacon Burger';
    burgers.push(anothernewBurger);

    function changefeaturedDrink(){
        featuredDrink = 'The Javashake';
    }

    changefeaturedDrink();
    console.log(featuredDrink);
         

}


