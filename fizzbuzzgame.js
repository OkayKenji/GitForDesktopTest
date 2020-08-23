//FizzBuzz is a game where you count up from 0.
//However when you reach a number that is a multiple of 3 you say Fizz
//                                          multiple of 5 you say Buzz
//                                                     both you say FizzBuzz
//This is inspired by the video by Tom Scott 
//See his video here:https://www.youtube.com/watch?v=QPZ0pIK_wsc
function fizzbuzz(  min,  max) {
    for (var i=min; i<=max ; i++) {
        if (fizz(i)||buzz(i)) {
            var str = ""; 
            if(fizz(i)) {
                str+="Fizz";
            }
            if(buzz(i)) {
                str+="Buzz";
            }
            console.log(str); 
        }
        else 
            console.log(i); 
    }
}

function fizz(x) {
     if (x%3==0)
        return true;
     else 
        return false;
}

function buzz( y) {
    if (y%5==0)
        return true;
     else 
        return false;
}
