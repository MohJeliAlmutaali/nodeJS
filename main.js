// example var code
function contohVar() {
    console.log("example var code: ")
    var x = 10;
    if (true) {
      var y = 20;
      console.log(x); // Output: 10
      console.log(y); // Output: 20
    }
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }
  
  contohVar();
//console.log(x); // Output: Error (x is not defined)

// example let code
function contohLet() {
    console.log("example let code: ")
    let x = 10;
    if (true) {
      let y = 20;
      console.log(x); // Output: 10
      console.log(y); // Output: 20
    }
    console.log(x); // Output: 10
  //console.log(y); // Output: Error (y is not defined)
  }
  
  contohLet();
  

// example cost code
function contohConst() {
    console.log("example cosnt code: ")
    const x = 10;
    if (true) {
      const y = 20;
      console.log(x); // Output: 10
      console.log(y); // Output: 20
    }
    console.log(x); // Output: 10
  //console.log(y); // Output: Error (y is not defined)
  }
  
  contohConst();
  
  
  