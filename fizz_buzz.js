/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];
    for(let i=1; i<=n; i++) {
        let text = null;
        if(i%3==0 && i%5==0) {
            text = "FizzBuzz";
        } else if(i%3==0) {
            text = "Fizz"
        } else if(i%5==0) {
            text = "Buzz"
        } else {
            text = i.toString();
        }
        answer.push(text);
    }
    return answer;
};
