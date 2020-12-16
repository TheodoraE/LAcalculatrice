/////////////////////////////////////////////
/////////////// Structure Générale //////////

// Créer les élémentet déclarer les variables
let body = document.body;
    // Section
let section = document.createElement('section');
body.prepend(section);
    // 5 Div
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
input.setAttribute('type', "number")
let clear = document.createElement('button');

divs[1].append(input, clear)


// Div 3 = 3 boutons et 1 bouton opération
let bouton;
for (let i = 0; i < 4; i++) {
    bouton = document.createElement('button');
    divs[2].append(bouton);
    var r1Boutons = divs[2].getElementsByTagName('button');
}
