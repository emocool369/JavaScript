function f(fruit, kg, price){
    console.log(`I need $${((kg / 1000) * price).toFixed(2)} to buy ${(kg / 1000).toFixed(2)} kilograms ${fruit}.`);
}

f('apple', 1563, 2.35);