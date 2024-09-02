const age = 116;

// Normal If-ELse
// if(age >= 18){
//     console.log("you can vote")
// }
// else{
//     console.log('You cannot vote')
// }

// simple ternary
// age >= 18 ? console.log('vote dio') : console.log('ghumai thako')

let price = 500;
const isLeader = false;

if(isLeader === true){
    price = 0;
}
else{
    price += 100
}

// console.log(price)

price = isLeader=== true? 0: price+100

// Optional ternary
if(isLeader == true){
    // ternary of this part will be
    // price > 1000 ? price/2 : 0
    if(price > 1000){
        price = price/2;
    }
    else{
        price = 0;
    }
}
else{
    price += 100;
}

// ternary
price = isLeader === true ?
     price > 1000 ?
         price/2 : 0 
    : price +100;