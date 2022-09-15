const nav = document.querySelectorAll("a");
let inputGebruiker = "Sale";

for (let navItem of nav) {

    if (navItem.textContent === inputGebruiker) {
        console.log("Er is een element, " + inputGebruiker + ", in de navigatie gelijk aan de input.");
        navItem.className += " redText";
    } else {
        console.log("Het navigatie-item is niet gelijk aan de input van de gebruiker");
    }
}


// Als een gebruiker met de muis over bepaalde navigatie items gaat (hover/mousover), dan bij bepaalde waarde verschijnt er submenu met categorieën
//misschien checken of een navigatieitem een sub-catgerieen heeft, zo ja laat ze zien, zo nee gebeurd er niets
// Bij de menuwaarde footwear, kleding, accesoires, lifestyle, releases, brands


//bij mousover/hover event laat vlak zien // als iemand hovert over footwear, add class display none

const footwearItem = document.querySelector(".test");
const subMenu = document.getElementsByClassName("submenu");


function showSubMenu() {
    console.log("de functie wordt uitgevoerd bij een mouse over");
    
    // add and delete class display

}

showSubMenu();

footwearItem.addEventListener('mouseover', showSubMenu);