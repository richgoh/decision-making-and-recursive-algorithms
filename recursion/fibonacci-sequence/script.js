
/*Fibonacci Sequence: 
Implement a recursive function to generate the nth Fibonacci number. 
The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum
 of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).*/


function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Exemple d'utilisation de la fonction
let n = parseInt(prompt("Entrez la valeur de n pour obtenir le nième nombre de la séquence de Fibonacci : "));
console.log("Le", n + "ème nombre de la séquence de Fibonacci est :", fibonacci(n));
