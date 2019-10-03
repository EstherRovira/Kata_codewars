/*


*/

//KATA MULTIPLY 

function multiply(a, b){
  return a * b
}

//KATA OPOSITE NUMBER

function opposite(number) {
return -number;
}

//KATA STRING REPEAT

function repeatStr (count, src) {
  return src.repeat(count);
}

//KATA 101 DALMATIANS

function howManyDalmatians(number){
  
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  
  var respond = number <= 10 ? dogs[0] :
  
                number <= 50 ? dogs[1] : 
                
                number === 101 ?  dogs[3] : 
                
                dogs[2]
  
return respond
}


