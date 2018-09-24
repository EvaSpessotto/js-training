'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :

function multiply(num1, num2){
    let sum = 0;
    if (num1 === 0 || num2 === 0){
        return 0;
    }
    else if (num1 > 0 && num2 > 0){
        for (let i = 0; i < num2; i++){
            sum += num1;
        }
        return sum;
    }
    else if (num1 < 0){
        for (let j = 0; j > num1; j--){
            sum += num2;
        }
        return -sum;
    }
    else if (num2 < 0){
        for (let j = 0; j > num2; j--){
            sum += num1;
        }
        return -sum;
    }
    else if (num1 < 0 && num2 < 0){
        for (let k = 0; k > num1; k++){
            sum += num2;
        }
        return -sum;
    }
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests*/
