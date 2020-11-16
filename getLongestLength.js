const getLongestLength = (str) => {
  let uniqSymbol = [];
  let maxLength = 0;
  for (let i = 0; i < str.length; i += 1) {
  	for (let k = i; k < str.length; k += 1){
  	if (uniqSymbol.indexOf(str[k]) === -1) {
      uniqSymbol.push(str[k]);
  	  }
    if (uniqSymbol.indexOf(str[k]) >= 0) {
    	if(uniqSymbol.length > maxLength) {
    		maxLength = uniqSymbol.length;
    		uniqSymbol = [];
    		uniqSymbol.push(str[k]);
    	}
    }
    
  	}
  	}
  return maxLength;
};




 console.log(getLongestLength('jabjcdel'), 7) ;
 console.log(getLongestLength('abcddef'), 4);
 console.log(getLongestLength('abbccddeffg'), 3);
 console.log(getLongestLength('abcd'), 4);
 console.log(getLongestLength('1234561qweqwer'), 9);
 console.log(getLongestLength('1234561qweqwerqer'), 9);
 console.log(getLongestLength(''), 0);