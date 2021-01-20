let values1 = ['Apple',1,false]
let values2 = ['Fries',2,true]
let values3 = ['Mars',9,'Apple']

function comPare(set1,set2){
    let result = []
    for (let index = 0; index < set1.length; index++) {
        if(typeof set1[index] === typeof set2[index]) result[index] = true
        else result[index] = false
    }
    return result;
}


console.log(comPare(values2,values3))