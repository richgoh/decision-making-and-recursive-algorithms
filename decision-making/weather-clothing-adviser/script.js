
/* Weather Clothing Adviser: 
Develop a program that asks the user for the current temperature and 
whether it is raining or not. Based on this information, 
advise the user on what clothing to wear.*/


function clothingAdviser(temperature, isRaining) {
    if (temperature < 10) {
        if (isRaining) {
            return "Il fait froid et il pleut. Vous devriez porter un manteau chaud et prendre un parapluie.";
        } else {
            return "Il fait froid mais il ne pleut pas. Portez un manteau chaud.";
        }
    } else if (temperature >= 10 && temperature < 20) {
        if (isRaining) {
            return "Il fait frais et il pleut. Portez une veste légère et prenez un parapluie.";
        } else {
            return "Il fait frais mais il ne pleut pas. Une veste légère devrait suffire.";
        }
    } else {
        if (isRaining) {
            return "Il fait chaud et il pleut. Vous voudrez peut-être prendre un parapluie.";
        } else {
            return "Il fait chaud et il ne pleut pas. Profitez du temps!";
        }
    }
}

// Demander à l'utilisateur la température actuelle
let temperature = parseFloat(prompt("Quelle est la température actuelle en Celsius ?"));

// Demander à l'utilisateur s'il pleut
let isRainingInput = prompt("Est-ce qu'il pleut ? (oui/non)").toLowerCase();
let isRaining = isRainingInput === "yes";

// Obtenir des conseils vestimentaires en fonction de la température et de la pluie
let advice = clothingAdviser(temperature, isRaining);

// Afficher les conseils à l'utilisateur
console.log(advice);
