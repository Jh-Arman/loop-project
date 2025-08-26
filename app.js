//guess the number function
function guessTheNumber(defficulty){
let randomNumber;
let attemps = 0;
let maxAttemps;
let range;



//Set defficulty-based parameters
switch (defficulty) {
    case 'easy' :
        range = 10;
        maxAttemps = 5;
        randomNumber = Math.floor(Math.random()* 10)+1;
   // console.log(randomNumber);
   break
   
   case 'medium':
    range = 100;
    maxAttemps = 7;
    randomNumber = Math.floor(Math.random()* 100) +1;
    //console.log(randomNumber)
    break

    case 'hard':
        range = 1000;
        maxAttemps = 10;
        randomNumber = Math.floor(Math.random()* 1000) +1;
    console.log(randomNumber)
   break

   default:
    console.error('Invalid level. Choose "easy","medium" or "hard"');




}

//Get user input and check guesses
while (attemps < maxAttemps){
    let guess = parseInt(prompt(`guess a number between 1 and ${range}{Inclusive}. You have ${maxAttemps - attemps} attemps left`

    ));
    attemps++;

    if (guess === randomNumber){
        console.log('Congratulations!You gussed the number in ',attemps,'attemps');
        break
    }else if (guess < randomNumber){
        console.log('Too Low.Try Again');
    }else {
        console.log('Too High.Try Again');
    }



    console.log(guess)
}


if (maxAttemps=== attemps){
    console.log('Sorry,You ran out of attemps.The Number was', randomNumber);
}




}





//get user input defficulty

let defficulty = prompt('Choose defficulty (easy,medium ,hard)').toLowerCase();

guessTheNumber(defficulty);

//console.log(defficulty)