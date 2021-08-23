// Closures
function makeMultiplier (multiplier) {
    // var multiplier = 2;
    function b() {
      console.log("Multiplier is: " + multiplier);
    }
    b();
  
  
    return (
        // This function still gets access to multiplier because of Javascipt Closure
        function (x) {
          return multiplier * x;
        }
        
      );
  }
  
  var doubleAll = makeMultiplier(2);
  console.log(doubleAll(10)); // its own exec env
