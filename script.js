//prime number

function isPrime(n) {
    if (n ==1) {
        console.log("1 is neither prime nor composite")
        return
    }
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i == 0) {
            console.log(`${n} is not prime number`)
            return
        }
    }
    console.log(`${n} is a prime number`)
}

isPrime(1)

//time complexity - O(sqrt(n))
//space complexity - O(1)

let arr = [1, 2, 3, 4, 5]
let large = arr[arr.length - 1]
console.log(large)

//time complexity -O(1)
//space complexity -O(1)

let secondLarge = arr[arr.length - 2];
console.log(secondLarge);

//time complexity -O(1)
//space complexity -O(1)


//fibonacci series
function fibonacci(n) {
    if (n == 0 || n==1) {
       return n
    }
    let prev = 0
    let curr = 1
    for (let i = 2; i <= n; i++){
        let next = prev + curr
        prev = curr
        curr = next
    }
   return curr
}
console.log(fibonacci(6))
//time complexity -O(n)
//space complexity -O(1)

function factorial(n) {
    if (n == 1) {
        return n
    }
    let fact = 1
    for (let i = 2; i <= n; i++){
        fact = fact * i
    }
    return fact
}
console.log(factorial(5))
//time complexity -O(n)
//space complexity -O(1)