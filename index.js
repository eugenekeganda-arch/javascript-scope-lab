// Step 1
let burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Step 2
function addBurger() {
    var newBurger = 'Flatburger';
    burgers.push(newBurger);
}

addBurger();

// Step 3
if (true) {
    let anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);

    function changeFeaturedDrink() {
        featuredDrink = 'The JavaShake';
    }

    changeFeaturedDrink();
}



