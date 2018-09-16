module.exports = function getZerosCount(number, base) {
  // your implementation
  var Simple = function(numb) {
    for(var i = 2; i < numb; i++)
      if(numb % i === 0) return false;
    return numb !== 1;
  }

  var getPrimaryMultipliers = function(baseNumb){
      var allSimples = {};
      var divider = 2;
      var tNumb = baseNumb;
      while(divider <=tNumb ){
          if (Simple(divider)){
              while (tNumb % divider == 0){
                tNumb =  tNumb/ divider;
                  if (allSimples[divider]){
                    allSimples[divider]+=1;
                  } else {
                    allSimples[divider]=1;     
                  }
              }   
          } 
          divider++;
          tNumb = baseNumb;    
      }
      return allSimples;    
  }

  primaryMultipliers = getPrimaryMultipliers(base);
  
  var sumPowParts    = {}
  var results        = []

  for (i in primaryMultipliers){
      sumPowParts[i]=0
      for (var j = 1; j <= 32; j++) {
          sumPowParts[i] += Math.floor(number / Math.pow(i, j));
      }
      results.push(sumPowParts[i]/primaryMultipliers[i]);
  }

  var result = Math.trunc(Math.min.apply(Math, results));

  return result;
}