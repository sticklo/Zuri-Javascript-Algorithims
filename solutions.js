// SOLUTION 1 
let convertFahrToCelsius = function (f){
    if (typeof(f) === 'boolean'){
      return `${JSON.stringify(f)} is not a valid number but a/an boolean`
    }
    if (isNaN(f) === true){
      if(Array.isArray(f)) return `${JSON.stringify(f)} is not a valid number but a/an array`
      return `${JSON.stringify(f)} is not a valid number but a/an ${typeof(f)}`
    } else{
      return ` ${((parseInt(f) - 32) * (5 / 9)).toFixed(4)} \n`;
    } 
  }
  
  console.log(convertFahrToCelsius(0));
  console.log(convertFahrToCelsius("0"));
  console.log(convertFahrToCelsius([1,2,3]));
  console.log(convertFahrToCelsius({temp: 0})); 


  //SOLUTION 2 
  const checkYuGiOh = (n = 0) => {
    // Edge Case: Line to check if the input is not a number  
    if (isNaN(Number(n))) return `invalid parameter: ${n}\n\n`;
  
    let array = [];
    for(i = 1; i <= n; i++) {
      let string = '';
  
      if(!(i % 2)) string += 'yu';
  
      if(!(i % 3)) string += string ? "-gi" : "gi"; 
  
      if(!(i % 5)) string += string ? "-oh" : "oh";
        
      string ? array.push(string) : array.push(i);
    }
  
    return `${array} \n\n`;
  }
  
  console.log("", checkYuGiOh(5),
  checkYuGiOh(10),
  checkYuGiOh("fizzbuzz is meh"),
  checkYuGiOh(30))