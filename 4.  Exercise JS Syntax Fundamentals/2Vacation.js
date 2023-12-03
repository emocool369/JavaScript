function solve(num, people, day){
    let price;
    let totalprice
    if (day == 'Friday'){
        if (people == 'Students'){
            price = 8.45;
        } else if (people == 'Business'){
            price = 10.90;
        } else if (people == 'Regular'){
            price = 15;
        }
    } else if (day == 'Saturday'){
        if (people == 'Students'){
            price = 9.80;
        } else if (people == 'Business'){
            price = 15.60;
        } else if (people == 'Regular'){
            price = 20;
        }
    } else if (day == 'Sunday'){
        if (people == 'Students'){
            price = 10.46;
        } else if (people == 'Business'){
            price = 16;
        } else if (people == 'Regular'){
            price = 22.5;
        }
    }

    if (people == 'Students' && num >= 30) {
        price *= 0.85;
    } else if (people == 'Business' && num >= 100){
        num = num -10;
    } else if (people == 'Regular' && num >= 10 && num <= 20){
        price = price * 0.95;
    }

    totalprice = num * price;
    console.log('Total price: ' + totalprice.toFixed(2));
    console.log(`Total price: ${totalprice.toFixed(2)}`);
}
solve(40,'Regular','Saturday');