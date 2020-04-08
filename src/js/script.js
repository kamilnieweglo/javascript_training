 
let sum  =  function()
{
    let a =2.1;
    let b =2.2
    return a+b;
};
showMessage("numberSum", sum().toString());

 let sliceArray = function()
 {
     let array = ['a','b','c','d'];
    let array2  = array.slice(1,2)
     return array2;

 }
showMessage("sliceArray", sliceArray() );

let spliceArray = function()
 {
     let array = ['a','b','c','d'];
        array.splice(1,1)
     return array;

 }
showMessage("spliceArray", spliceArray() );