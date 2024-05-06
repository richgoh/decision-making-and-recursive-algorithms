
// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20

function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Demander à l'utilisateur son âge
let age = parseInt(prompt("Entrez votre âge : "));

// Calculer le prix du billet en fonction de l'âge
let price = calculateTicketPrice(age);

// Afficher le prix du billet
console.log("Le prix du billet est de $" + price + ".");
