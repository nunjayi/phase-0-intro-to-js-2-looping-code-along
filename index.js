// Code your solutions in this file
function writeCards(nameArray,event){
    let messagesArray = []
    for(let i=0;i<=nameArray.length-1;i++){
        messagesArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`)
    }
    return messagesArray
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))
function countDown(number){
    while(number>=0){
        console.log(number)
        number--
    }

}
countDown(15)
