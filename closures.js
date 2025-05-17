function x()
{
    var a=7;
    return function y()
    {
        console.log(a);
    }
    
}
x();