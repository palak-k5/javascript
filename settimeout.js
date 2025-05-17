function x() {
    for (var i = 1; i <= 5; i++) {
      function close(i) {
        setTimeout(function () {
          console.log(i);
        }, i * 1000);
        // put the setT function inside new function close()
      }
      close(i); // everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
    }
    console.log("Namaste Javascript");
  }
  x();
  