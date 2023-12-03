function jsObjects(){

    let obj = {
        name: 'Ivo',
        age:30,
        friends:[
            {
            name:'Rado',
            age:27
            },
            {
                name:'Emo',
                age:45
            }
        ]
    };

    let obj2 = JSON.parse(JSON.stringify(obj)); //deepcopy, vkl i masiva

    obj.age = 40;
    obj.friends[0].name = 'Daniel';

    console.log(obj);
    console.log(obj2);
    console.log(obj.friends[0].name);
    console.log(obj2.friends[0].name);
    
}
jsObjects();