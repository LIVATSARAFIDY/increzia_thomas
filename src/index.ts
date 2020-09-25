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
