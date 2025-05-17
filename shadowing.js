var a = 100;
{
  let a = 10; // same name as global var
  let b = 20;
  const c = 30;
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}
console.log(a); // 10, instead of the 100 we were expecting.
//  So block "a" modified val of global "a" as well. 
// In console, only b and c are in block space.
//  a initially is in global space(a = 100), 
// and when a = 10 line is run, a is not created in block space,
//  but replaces 100 with 10 in global space itself.
