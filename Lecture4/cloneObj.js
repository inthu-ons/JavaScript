//Obj clonning
//Obj Ref,Obj clonning assign(),{...x},JSON
//
const obj1 = {
    person : 'Puchcharapoom',
    Weight : 85
}

//const obj2 = obj1;
const obj2 = Object.assign({},obj1);
//const obj2 = {...obj1};
obj2.Weight=73;
console.log(obj1);
console.log(obj2);
