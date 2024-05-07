// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:

let enemyArcaneHP = 100;
let enemyEntangleHP = 100;

let attackArcaneAP = 100;
let attackEntangleAP = 100;
let attackDragonAP = 100;
let attackStarAP = 100;

function onReady() {
    console.log("Ready to go!")

    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()
// Function for Arcane Scepter
function attackArcane(){
console.log('attackArcane () works');
// Each time button is pressed, AP Cost: 12, HP Damage: 14
// Decrease AP + HP
enemyArcaneHP -= 14;
attackArcaneAP -= 12;
console.log('Current enemyHP:', enemyArcaneHP);
console.log('Current attackAP:', attackArcaneAP);
let arcaneAP = document.getElementsByClassName("ap-text")[0];
arcaneAP.textContent = `${attackArcaneAP} AP`
let arcaneHP = document.getElementsByClassName("hp-text")[0];
arcaneHP.textContent = `${enemyArcaneHP} HP`
}

// Function for Entangle

function attackEntangle(){
    console.log('attackEntangle () works!');
    //Decrease AP + HP

    enemyEntangleHP-=9;
    attackEntangleAP-=23;
    console.log('Current enemyHP:', enemyEntangleHP);
    console.log('Current attackAP:', attackEntangleAP);
    let entangleAP = document.getElementsByClassName("ap-text")[0];


}

attackEntangle();

// Function for Dragon Blade

// Function for Star Fire


// Function for render
// I need the number to change for attack and enemy class