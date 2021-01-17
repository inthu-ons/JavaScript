function equation(num) {
    var strnum = num;
    var operator = "";
    var numm = "";
    for(var i = 0 ; i < num.length ; i++){
      console.log(strnum[i]);
      if(strnum[i] == '+'){
        operator += '+';
      }else if(strnum[i] == '-'){
        operator += '-';
      }else if(strnum[i] == '*'){
        operator += '*';
      }else if(strnum[i] == '/'){
        operator += '/';
      }else numm += strnum[i];
    }

    var total = parseInt(numm[0]) ;
    for(var i = 1 ; i < numm.length ; i++){
      if(operator[i-1] == '+'){
        total+=parseInt(numm[i]);
      }else if(operator[i-1] == '-'){
        total-=parseInt(numm[i]);
      }else if(operator[i-1] == '*'){
        total*=parseInt(numm[i]);
      }else if(operator[i-1] == '/'){
        total/=parseInt(numm[i]);
      }
    }
    return total;
}
console.log(equation("7*4-2"));