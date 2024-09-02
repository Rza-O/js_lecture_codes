const friends = ['Balam', 'Kalam', 'Salam', 'palam', 'Golam'];

console.log(friends.includes('Balam'))
console.log(friends.includes('nolan'))
friends.push('nolan')
if(friends.includes('nolan')){
    console.log("party")
}
else{
    console.log('No Party')
}