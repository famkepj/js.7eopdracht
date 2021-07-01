const bigNumber = function(number) {

  if (number > 100){
       return true;
   }
return false;
};

const result = bigNumber(150);
console.log(result);

/* above is a function that produce something */


/* Bouncer at a club*/

const bouncer = function (visitors, age){
    
    if (visitors > maxVisitors){
        return "it's too busy now, come back later";
    }
    if (age < 21){
        return "this is a club for adults";
    }

    return "come in";
};


const maxVisitors = 100;
const result2 = bouncer(101, 20);
console.log(result2);


/* Calculating the average*/

const calculateAverage = function (number1, number2, number3, number4, number5){
    const average = (number1 + number2 + number3 + number4 + number5)/5;
    return average;
};

const result3 = calculateAverage (2,3,5,6,8);
console.log(result3);

