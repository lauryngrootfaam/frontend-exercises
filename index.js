

const nav = document.querySelectorAll("a");
let inputGebruiker= "Sale";

for (let navItem of nav) {

    if (navItem.textContent === inputGebruiker){
                console.log("er is een link gelijk aan sale");
                navItem.className += " redText"; 
           }
           
           else {
                console.log("er gebeurd niets");
           }
        
}



// const navLink = document.getElementById("test");


// function makeTextRed(navItem){
//     if (navItem === "Sale"){
//         console.log("er is een link gelijk aan sale");
//         navLink.className += " redText"; 
//    }
   
//    else {
//         console.log("er gebeurd niets");
//    }

// }

// makeTextRed(navLink.textContent);