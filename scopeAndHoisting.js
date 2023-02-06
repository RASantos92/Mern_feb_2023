let global = "global";
// console.log("function1scope" ,function1Scope)
console.log(global, "from global scope");

{
    let block = "block";
    console.log(block, "from block scope")
    console.log(global, "from global scope")
}

// wont work outside of the block it was defined in
// console.log(block);

function fn1(){
    console.log(function1Scope,"test")
    console.log(global, "from nested fn1 scope")
    console.log(y)
    var function1Scope = "fn 1 scope";

    if(true){
        let x = 7;
        var y = 10; // the var keyword has a side effect. Which is hoisting
    }

    console.log("y :" , y)
    // console.log("x :" , x)
}

fn1();


function fn2(num){
    console.log(num)
}

if(true){
    let x = 5;
    fn2(x);
}