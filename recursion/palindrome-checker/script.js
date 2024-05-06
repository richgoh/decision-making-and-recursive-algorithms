
/*Palindrome Checker: 
Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards),
 ignoring spaces, punctuation, and capitalization. */


function isPalindrome(str) {
    // Fonction pour retirer les espaces et la ponctuation et mettre en minuscules
    function cleanString(s) {
        return s.replace(/[^\w]|_/g, "").toLowerCase();
    }

    // Fonction récursive pour vérifier si la chaîne est un palindrome
    function checkPalindrome(s) {
        if (s.length <= 1) {
            return true; // Si la chaîne a 0 ou 1 caractère, c'est un palindrome
        } else if (s[0] !== s[s.length - 1]) {
            return false; // Si les caractères de début et de fin ne correspondent pas, ce n'est pas un palindrome
        } else {
            // Appel récursif pour vérifier le reste de la chaîne
            return checkPalindrome(s.slice(1, -1));
        }
    }

    // Appel de la fonction récursive après avoir nettoyé la chaîne
    return checkPalindrome(cleanString(str));
}

// Exemple d'utilisation de la fonction
let input = prompt("Entrez une chaîne pour vérifier si c'est un palindrome : ");
if (isPalindrome(input)) {
    console.log("'" + input + "' est un palindrome.");
} else {
    console.log("'" + input + "' n'est pas un palindrome.");
}
