// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de parent/enfant/premier element/dernier element/ etc.. PART 2*

// ### 1. Récupère et affiche le premier enfant de la dernière div

let myDiv = document.getElementsByTagName("div")[2];
console.log(myDiv);

firstChild = myDiv.firstElementChild;
console.log(firstChild);


// ### 2. Récupère et affiche le dernier enfant de la dernière div

lastChild = myDiv.lastElementChild;
console.log(lastChild);

// ### 3. Récupère l'élément i contenu dans le premier p de la dernière div et affiche le

let i = firstChild.nextElementSibling.firstElementChild;
console.log(i);


// ### 4. Récupère l'élément b contenu dans le dernier p de la dernière div et affiche le

let b = lastChild.firstElementChild;
console.log(b);

// ### 5. Affiche l'élément parent de l'élément i

let parentI = i.parentElement;
console.log(parentI);

// ### 6. affiche l'élément parent de l'élément b

let barentB = b.parentElement;
console.log(barentB);

// ### 7. affiche l'élément suivant le premier enfant de la dernière div

let p = firstChild.nextElementSibling;
console.log(p);