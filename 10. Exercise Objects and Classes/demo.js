function jsObjects(){

    let obj = {
        name: 'Ivo',
        age:30
    };

    let obj2 = obj;

    obj.age = 40;

    console.log(obj);
    console.log(obj2);
}
jsObjects();