/////////////////////////////////////////////
/////////////// Structure Générale //////////

// Créer les éléments et déclarer les variables
let body = document.body;
    // Section
let section = document.createElement('section');
body.prepend(section);
    // 6 Div
let div;
for (let i = 0; i < 6; i++) {
    div = document.createElement('div');
    var divs = document.getElementsByTagName('div');
    // Insérer dans la section
    section.append(div);
};

// Div 1 = Titre
let h1 = document.createElement('h1');
let h1Text = document.createTextNode("CalculaTid");
h1.append(h1Text);
divs[0].append(h1);


// Div 2 = Input et Clear
let input = document.createElement('input');
input.setAttribute('type', "text");
input.setAttribute('disabled', "");
let clearButton = document.createElement('button');

divs[1].append(input, clearButton)


// Div 3 = 3 boutons et 1 bouton opération
let bouton;
for (let i = 0; i < 4; i++) {
    bouton = document.createElement('button');
    divs[2].append(bouton);
    var r1Boutons = divs[2].getElementsByTagName('button');
}

// Div 4 = 3 boutons et 1 bouton opération
for (let i = 0; i < 4; i++) {
    bouton = document.createElement('button');
    divs[3].append(bouton);
    var r2Boutons = divs[3].getElementsByTagName('button');
}

// Div 5 = 3 boutons et 1 bouton opération
for (let i = 0; i < 4; i++) {
    bouton = document.createElement('button');
    divs[4].append(bouton);
    var r3Boutons = divs[4].getElementsByTagName('button');
}

// Div 6 = 3 boutons et 1 bouton opération
for (let i = 0; i < 4; i++) {
    bouton = document.createElement('button');
    divs[5].append(bouton);
    var r4Boutons = divs[5].getElementsByTagName('button');
}

// Tous les boutons
let boutons = document.getElementsByTagName('button');

for (let i = 0; i < boutons.length; i++) {
    switch(i){
        case 0:
            boutons[0].setAttribute('id', "clear");
            boutons[0].innerHTML = "C";
            break;
        case 1:
            boutons[1].setAttribute('class', "chiffres");
            boutons[1].innerHTML = "7";
            break;
        case 2:
            boutons[2].setAttribute('class', "chiffres");
            boutons[2].innerHTML = "8";
            break;
        case 3:
            boutons[3].setAttribute('class', "chiffres");
            boutons[3].innerHTML = "9";
            break;
        case 4:
            boutons[4].setAttribute('class', "operations");
            boutons[4].innerHTML = "/";
            break;
        case 5:
            boutons[5].setAttribute('class', "chiffres");
            boutons[5].innerHTML = "4";
            break;
        case 6:
            boutons[6].setAttribute('class', "chiffres");
            boutons[6].innerHTML = "5";
            break;
        case 7:
            boutons[7].setAttribute('class', "chiffres");
            boutons[7].innerHTML = "6";
            break;
        case 8:
            boutons[8].setAttribute('class', "operations");
            boutons[8].innerHTML = "*";
            break;
        case 9:
            boutons[9].setAttribute('class', "chiffres");
            boutons[9].innerHTML = "1";
            break;
        case 10:
            boutons[10].setAttribute('class', "chiffres");
            boutons[10].innerHTML = "2";
            break;
        case 11:
            boutons[11].setAttribute('class', "chiffres");
            boutons[11].innerHTML = "3";
            break;
        case 12:
            boutons[12].setAttribute('class', "operations");
            boutons[12].innerHTML = "-";
            break;
        case 13:
            boutons[13].setAttribute('class', "chiffres");
            boutons[13].innerHTML = "0";
            break;
        case 14:
            boutons[14].setAttribute('class', "chiffres");
            boutons[14].innerHTML = ".";
            break;
        case 15:
            boutons[15].setAttribute('id', "egal");
            boutons[15].innerHTML = "=";
            break;
        case 16:
            boutons[16].setAttribute('class', "operations");
            boutons[16].innerHTML = "+";
            break;
    }    
}

/////////////////////////////////////////////
//////////// Style et mise en page //////////
body.style.height = "100vh";
body.style.margin = "0%"
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";

section.style.width ="300px"
section.style.border = "2px black solid";
section.style.padding = "3%";
section.style.backgroundColor = "lightblue";
section.style.borderRadius = "5px";

for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "flex";
    divs[i].style.justifyContent = "center";
};

h1.style.fontFamily = "Arial";
h1.style.marginTop = "0%";
h1.style.textAlign = "center";

input.style.fontSize = "26px"
input.style.textAlign = "end"
input.style.height = "40px";
input.style.width = "180px";
input.style.margin = "3% 4% 1% 2%";

for (let i = 0; i < boutons.length; i++) {
    boutons[i].style.padding = "4% 8%";
    boutons[i].style.margin = "2%";
    boutons[i].style.fontSize = "22px"
};

boutons[14].style.padding = "3% 9% 4% 8.5%"

/////////////////////////////////////////////
/////////////// Mise en fonction ///////////

// Déclarer les variables
let chiffres = document.querySelectorAll('.chiffres');

for (let i = 0; i < chiffres.length; i++) {
    switch(i){
        case 0:
            chiffres[0].value = "7";
            break;
        case 1:
            chiffres[1].value = "8";
            break;
        case 2:
            chiffres[2].value = "9";
            break;
        case 3:
            chiffres[3].value = "4";
            break;
        case 4:
            chiffres[4].value = "5";
            break;
        case 5:
            chiffres[5].value = "6";
            break;
        case 6:
            chiffres[6].value = "1";
            break;
        case 7:
            chiffres[7].value = "2";
            break;
        case 8:
            chiffres[8].value = "3";
            break;
        case 9:
            chiffres[9].value = "0";
            break;
        case 10:
            chiffres[10].value = ".";
            break;
    }
}

// Les operations
let operations = document.querySelectorAll('.operations');
let operateur = "";

for (let i = 0; i < operations.length; i++) {
    switch(i){
        case 0:
            operations[0].value = "/";
            break;
        case 1:
            operations[1].value = "*";
            break;
        case 2:
            operations[2].value = "-";
            break;
        case 3:
            operations[3].value = "+";
            break;
    };

    operations[i].addEventListener('click', function(){
        operateur = this.value;
        input.value = operateur;
        console.log(operateur)
    })
}

// Bouton Clear
let clear = document.querySelector('#clear');
clear.addEventListener('click', function(){
    input.value = "";
    value1 = "";
    value2 = "";
    operateur = "";
})

// Les valeurs
let value1;
let value2;
let egal = document.querySelector('#egal');

for (let i = 0; i < chiffres.length; i++) {
    chiffres[i].addEventListener('click', function (){
        if (operateur == ""){
            input.value += chiffres[i].value;
            value1 = Number(input.value);
            console.log(value1)
        } else{
            input.value += chiffres[i].value;
            value2 = Number(input.value.substr(1, input.value.length));
            console.log(value2)
        }
    })
}

// Calcul
egal.addEventListener('click', function(){
    switch(operateur){
        case "+":
            input.value = value1 + value2;
            console.log(input.value)
            break;
        case "-":
            input.value = value1 - value2;
            console.log(input.value)
            break;
        case "*":
            input.value = value1 * value2;
            console.log(input.value)
            break;
        case "/":
            input.value = value1 / value2;
            console.log(input.value)
            break;
    }
    value1 = "";
    value2 = "";
    operateur = "";
})


/////////////////////////////////////
//// Touches de clavier
body.addEventListener('keydown', function(e){
    input.disabled = false;

})

// ((KeyCode >= 48 && KeyCode <= 87) )
// point = 190 et virgule = 188
// égal = 187