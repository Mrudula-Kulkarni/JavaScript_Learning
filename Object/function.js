// Functions are First Class Data Type
// Functions are ARE objects
function multiply(x,y){
    return(x*y);
}
console.log(multiply(6,9));
multiply.version="v.1.0.0";
console.log(multiply.version);

//Function Factory
function makeMultiplier(mul){
    var myFun = function(x){
         return(mul*x);
    };
    return myFun;
}

var mymul3 = makeMultiplier(3);
console.log(mymul3(6));

// Passing Function as a argument
function doOperation(val,operation){
    return operation(val);
}

var result = doOperation(9,mymul3);
console.log(result);

// Passing by Value vs Passing by reference

// Pass by value
function changePrimitive(primValue) {
    console.log("in changePrimitive...");
    console.log("before:");
    console.log(primValue);
    
    primValue = 5;
    console.log("after:");
    console.log(primValue);
  }

var value=9;
changePrimitive(value);
console.log("after changePrimitive, orig value:");
console.log(value);


// Pass by Reference

function changeObject(objValue) {
    console.log("in changeObject...");
    console.log("before:");
    console.log(objValue);
    
    objValue.x = 5;
    console.log("after:");
    console.log(objValue);
  }

value={x:10};
changeObject(value);
console.log("after changeObject, orig value:");
console.log(value);