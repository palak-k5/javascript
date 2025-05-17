function a() {
    console.log(b); // 10
    // Instead of printing undefined it prints 10, So somehow
    //  this a function could access the variable b outside the function scope.
  }
  var b = 10;
  a();
  // CASE 2
function a() {
    c();
    function c() {
      console.log(b); // 10
    }
  }
  var b = 10;
  a();
  // CASE 3
  function a() {
    c();
    function c() {
      var b = 100;
      console.log(b); // 100
    }
  }
  var b = 10;
  a();
  // CASE 4
  function a() {
    var b = 10;
    c();
    function c() {
      console.log(b); // 10
    }
  }
  a();
  console.log(b); // Error, Not Defined
  


  ///\temporal dead zone

  console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // prints undefined as expected
let a = 10;
console.log(a); // 10
var b = 15;
console.log(window.a); // undefined
console.log(window.b); // 15
