function rr (km, type){
    let status;
    let limit = 0;
    let difference = 0;
    if (type == 'motorway'){
      limit = 130;
    } else if (type == 'interstate'){
        limit = 90;
    } else if (type == 'city'){
        limit = 50;
    } else if (type == 'residential'){
        limit = 20;
    }

    difference = km - limit;
    if (difference > 0){
        if (difference <= 20){
            status = 'speeding';
        } else if (difference > 20 && difference <= 40){
            status = 'excessive speeding'
        } else {
            status = 'reckless driving'
        }
    }

    if (difference <= 0){
        console.log(`Driving ${km} km/h in a ${limit} zone`)
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status} `);
    }
}

rr(40, 'city');
rr(21, 'residential');
rr(120, 'interstate');
rr(200, 'motorway');