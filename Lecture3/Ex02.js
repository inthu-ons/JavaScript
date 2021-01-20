let furniture = ['Table','Chairs','Couch']

function Letter(arr1){
    for(const str_array of arr1){
        console.log(`************${str_array}************`)
        for (const char of str_array) {
            console.log(char )
        }
        console.log("");
    }
}
Letter(furniture)