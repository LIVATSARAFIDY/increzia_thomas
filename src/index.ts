//exo 1 javascript
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
    for (i = longeurTab - 1; i >= 0; i--) {
        newtab.push(tab[i]);
    }
    console.log(newtab);
}
arrangetab([0, 3, -5, 12, -18, -20]);

// exo 1 typescript

class matrices {
    i = 0;
    m = 0;
    formMat(a: string) {
        for (this.i = 0; this.i <= 2; this.i++) {
            if (this.i === 0) this.m = this.m + '((0,1,0),';
            else if (this.i === 1) this.m = this.m + '(1,1,0),';
            else this.m = this.m + '(0,0,1))';
        }
        console.log(this.m);
    }
}
var donnerMatrice = new matrices();
console.log(donnerMatrice);
