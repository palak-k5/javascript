var b = function (param1) {
    console.log(param1); // prints " f() {} "
  };
  b(function () {});
  
  // Other way of doing the same thing:
  var b = function (param1) {
    console.log(param1);
  };
  function xyz() {}
  b(xyz); // same thing as prev code
  
  // we can return a function from a function:
  var b = function (param1) {
    return function () {};
  };
  console.log(b()); //we log the entire fun within b.
  