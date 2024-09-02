// Odds Number
// for(let i =0; i < 20; i++){
//     if(i%2===1){
//         console.log(i);
//     }
// }


// for(let i =0; i < 20; i++){
//     if(i%2!==0){
//         console.log(i);
//     }
// }

// for(let i =1; i < 20; i+=2){
    
//     console.log(i);
    
// }

// Divisible by 3
// for(let i = 1; i <= 30; i++){
//     if(i%3===0){
//         console.log(i);
//     }
// }

// for(let i = 1; i <= 30; i++){
//     if(i%5===0 || i%3===0){
//         console.log(i);
//     }
// }


// for(let i = 1; i <= 100; i++){
//     if(i%5===0 && i%3===0){
//         console.log(i);
//     }
// }

// sum of number that are divisible by 3
let sum = 0;
for(let i =1; i <= 20; i++){
    if(i % 3===0){
        console.log(i)
        sum = sum + i;
        console.log('Total', sum)
    }
}

console.log('Total of numbers', sum)