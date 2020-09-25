//const text: string = 'coo!!!'
//console.log(text);
var i;
var matrice;
for (i = 0; i <= 2; i++) {
    if (i === 0) matrice = matrice + '((0,1,0),';
    else if (i === 1) matrice = matrice + '(1,1,0),';
    else matrice = matrice + '(0,0,1))';
}
console.log(matrice);
// function somme des entier positive d'un tableau
function sommeEntier(i, tab) {
    var longeurTab = tab.length;
    var j;
    var somme = 0;
    if (tab[i] !== 'undifend') {
        for (j = i; j < longeurTab; j++) {
            if (tab[j] > 0) somme = somme + tab[j];
        }
        console.log(somme);
    } else console.log("index n'exist pas");
}
sommeEntier(0, [0, 3, -5, 12, -18, -20]);

//function arranger tableau

function arrangetab(tab) {
  var longeurTab = tab.length;
  var newtab = [];
  var i;
  for (i = longeurTab-1; i >= 0 ;i--) {
      newtab.push(tab[i]);
  }
  console.log(newtab);
}
arrangetab([0,3,-5,12,-18,-20]);
