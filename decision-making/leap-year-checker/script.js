// Leap Year Checker: 
// Create a function that takes a year as input and determines whether it is a leap year or not. 
// Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.



/*
Resolution

Cette fonction prend en entrée une année et vérifie si elle est divisible par 4. 
Si elle est divisible par 100, 
elle vérifie ensuite si elle est également divisible par 400 
pour être considérée comme bissextile. La fonction renvoie true 
si l'année est bissextile et false sinon.*/


function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Exemple d'utilisation de la fonction
let year = parseInt(prompt("Entrez une année : "));
if (isLeapYear(year)) {
    console.log(year + " est une année bissextile.");
} else {
    console.log(year + " n'est pas une année bissextile.");
}
