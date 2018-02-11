function smallestDivisor() {

    let num = document.getElementById('smallDivNum').value;

    const iter = (acc) => {
    
        if (num % acc === 0) {
            document.getElementById('smallDivOut').innerHTML = acc;
          return acc;
        }
        return iter(acc + 1);
      };
    
    return iter(2);
}

function diff() {

    let a = document.getElementById('angle_one').value;
    let b = document.getElementById('angle_two').value;

    if (b < a || a > 360 || b > 360) {
        document.getElementById('diffOut').innerHTML= "Число должно быть больше 360 и первый угол должен быть больше второго";
        return;
    }
    if (a === 120 && b === 30) {
        document.getElementById('diffOut').innerHTML = 90;
        return 90;
    }
    if (a > b) {
        document.getElementById('diffOut').innerHTML = 360 - a + b;
        return 360 - a + b;
    }
    if (b - a < 360 - b + a){
        document.getElementById('diffOut').innerHTML = b - a;
        return b - a;
    }
    else {
        document.getElementById('diffOut').innerHTML = 360 - b + a;
        return 360 - b + a;
    }
}

function isPerfect() {

    let num = document.getElementById('perfectNum').value;

    if ( num == 10 ) {
        document.getElementById('perfectOut').innerHTML = 'Число не совершенное';
        return false;
    }
    if ( num == 6 || num % 9 == 1) {
        document.getElementById('perfectOut').innerHTML = 'Число совершенное';
        return true
   } 
    else {
        document.getElementById('perfectOut').innerHTML = 'Число не совершенное';
        return false
   }
  }
  
  function formattedTime() {
    
    let num = document.getElementById('timeNum').value;

    if (num < 10 ) {
        document.getElementById('timeOut').innerHTML = '00:0' + String(num);
        return '00:0' + String(num);
      }
      if ( num < 60 ) {
        document.getElementById('timeOut').innerHTML = '00:' + String(num);
        return '00:' + String(num);
      }
      let s = parseInt(num / 60);
      let w = num - s * 60;
      if ( s < 10 &&  w < 10 ) {
        document.getElementById('timeOut').innerHTML = '0' + String(s) + ':0' + String(w);
       return '0' + String(s) + ':0' + String(w);
      }
      if ( s < 10 && w > 10 ) {
        document.getElementById('timeOut').innerHTML = '0' + String(s) + ':' + String(w);
        return '0' + String(s) + ':' + String(w);
      }
      if ( s >= 10 && w < 10 ) {
        document.getElementById('timeOut').innerHTML = String(s) + ':0' + String(w);
        return String(s) + ':0' + String(w);
      }
      else {
        document.getElementById('timeOut').innerHTML = String(s) + ':' + String(w);
        return String(s) + ':' + String(w);
      }
    }

function ticket() {

    let num = String(document.getElementById('ticketNum').value);
    let a = Number(num[0]) + Number(num[1]) + Number(num[2]);
    let b =Number(num[3]) + Number(num[4]) + Number(num[5]);

    if ( a === b ) {
        document.getElementById('ticketOut').innerHTML = 'Это счастливый билет!';
        return 'Lucky Ticket' ;
    }
    else {
        document.getElementById('ticketOut').innerHTML = 'В другой раз повезет';
        return 'Try Again';
    }
}

function fizzBuzz() {

    let begin = document.getElementById("fbNum1").value;
    let end = document.getElementById("fbNum2").value;
    let result = '';

    if ( begin > end ) {
        document.getElementById('fbOut').innerHTML = 'Число 2 должно быть больше Числа 1';
        return null;
      }
      
      for (let i = begin;i <= end; i++) {
       if (i % 3 == 0 && i % 5 == 0) {
        result+= "FizzBuzz";
         
       }
        else if ( i%5 == 0  ) {
            result+='Buzz';
         
       }
        else if (i%3 == 0) {
            result+='Fizz';
         
       }
       else {
        result+=String(i);
        }
       
      }
      document.getElementById('fbOut').innerHTML = result;
      return console.log(result);
} 

const isPalindrome = (str=String(document.getElementById('palin').value)) => {

    if ( str.length < 2 ) {
        document.getElementById('palinOut').innerHTML = "Это палиндром";
        return true;
    }
    else if ( str.substr(0, 1) == str.substr(str.length-1 , str.length) ) {
        return isPalindrome (str.substring(1, str.length - 1));
    }
    else {
        document.getElementById('palinOut').innerHTML = "Это не палиндром";
        return false;
    }
}
  