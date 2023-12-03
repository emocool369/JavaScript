function storeProvision(currentStock, orderedProducts){

    const stock = {};
        for(let i = 0; i < currentStock.length ;i+=2){
            let product = currentStock[i];
            let quantity = Number(currentStock[i+1]);

                if(!stock.hasOwnProperty(product)){
                    stock[product] = quantity; //setva kato key chips, kato value 5
                    //stock.product = quantity; - kato gornoto, no gornoto e po-dobre
                }else{
                    stock[product] += quantity;
                }
        }
        for(let i = 0; i < orderedProducts.length ;i+=2){
            let product = orderedProducts[i];
            let quantity = Number(orderedProducts[i+1]);

                if(!stock.hasOwnProperty(product)){
                    stock[product] = quantity;
                    //stock.product = quantity; - kato gornoto, no gornoto e po-dobre
                }else{
                    stock[product] += quantity;
                }
        }

        for (const product in stock){
            console.log(`${product} -> ${stock[product]}`)
        }
    }
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );