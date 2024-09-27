window.addEventListener("scroll", () =>{
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})


// function isPalindrome (word) {
//     const reverseword = word 
//     .split('')
//     .reverse('')
//     .join('')

//     return word.toUpperCase() === reverseword.toUpperCase()
// }
// console.log(isPalindrome('kayak')) // true
// console.log(isPalindrome('SOS')) // true
// console.log(isPalindrome('RADAR')) // true
// console.log(isPalindrome('Mm')) // false
// console.log(isPalindrome('MTTM')) // false
// console.log(isPalindrome('WAOWAO')) // false
// console.log(isPalindrome('ABBA')) // false

// let compteur = 1;

// while (compteur <= 10) {
//     console.log(compteur);
//     compteur++;

//     if(compteur <= 5){
//         console.log('exatement')
//     }else if(compteur >= 5){
//         console.log('moins')
//     }else{
//         console.log(false)
//     }
// }
// let nombre = 4; // Nombre dont on veut calculer le facteur
// let facteur = 1; // Variable pour stocker le résultat

// while (nombre > 0) {
//     facteur *= nombre; // Multiplie le facteur par le nombre actuel
//     nombre--; // Décrémente le nombre
// }

// console.log("Le facteur de 4 est : " + facteur);

// function isPair(a) {
//     return a % 2 === 0

// }

// console.log(isPair(90))

// function addition(a, b){
//     return a - b

//     if( a !== 'number' && b !== 'number') {
//         return 'Les deux arguments doivent être des nombres.';
//     }

// }

// console.log(addition(100, 100))



// const etudiants = [
//     {
//         name: 'rimKa',
//         notes: [10, 8, 18, 9, 12, 5, 14]
//     },
//     {
//         name: 'Ceasar',
//         notes: [10, 14, 12, 10, 12, 8, 14]
//     },
//     {
//         name: 'Waladembad',
//         notes: [5, 8, 7, 9, 12, 5, 14]
//     },
//     {
//         name: "Cycky",
//         notes: [19, 18, 18, 20, 12, 5, 14]
//     },
//     {
//         name: 'Bastalion',
//         notes: [12, 11, 18, 20, 12, 5, 14]
//     },
//     {
//         name: 'Jodas',
//         notes: [16, 18, 18, 19, 12, 15, 14]
//     },
//     {
//         name: 'Amiral',
//         notes: [20, 18, 18, 19, 12, 5, 14]
//     },
//     {
//         name: 'Madmax',
//         notes: [15, 18, 18, 9, 12, 5, 14]
//     }
// ]

// const moyenne = (notes) => {
//       let sum = 0
//       for(let note of notes ) {
//         sum = sum + note
//       }
//      return sum / notes.length
// }

// const comparedEtudiant = (a, b) =>{
//     return b.moyenne - a.moyenne
// }

// for(let student of etudiants) {
//       student.moyenne = moyenne(student.notes)
// }

// const formeEtudiant = (etudiants) => {
//     return `  1: ${etudiants.name}  avec le moyenne de ${etudiants.moyenne} `
// }
// etudiants.sort(comparedEtudiant)

// console.log(` Top 8 étudiant
//  1: ${formeEtudiant(etudiants[0])}  
//  2: ${formeEtudiant(etudiants[1])} 
//  3: ${formeEtudiant(etudiants[2])} 
//  4: ${formeEtudiant(etudiants[3])} 
//  5: ${formeEtudiant(etudiants[4])} 
//  6: ${formeEtudiant(etudiants[5])} 
//  7: ${formeEtudiant(etudiants[6])} 
//  8: ${formeEtudiant(etudiants[7])} 

    
//     `)

// function retourMessage (score, nombreDeScore) {
//     let message = 'votre score est de ' + score + ' sur ' + nombreDeScore
//     return message
   
// }

// let retourneNouveauMessage = retourMessage(50, 100)
// console.log(retourneNouveauMessage)


// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur
// const listeMots = ["Cachalot", "Pétunia", "Serviette"]
// const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]
// let motUtulisateur

// function afficherResultat (score, nbMotsproposés) {
//     // on affiche le score de l'utilisatuer 
//     console.log('Votre score est de ' + score + ' sur ' + nbMotsproposés)
// }

// // L'utilisateur demande taper les phrases ou des mots. 
// function choisirPhrasesOuMots () {
//       // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
//     let choix = prompt('Si vous choisissez les mot "entrez mots" et si vous choisissez les phrases "entrez phrases" ')
//     while (choix !== 'mots' && choix !== 'phrases') {
//         choix = prompt ('Avec quelle liste désirez vous jouer "mots" et "phrases"')
//     }
//     return choix
// }
  

//  function lancerBoucleDeJeu (listeProposition) {
//     let score = 0
//     for (let i =0; i < listeProposition.length; i++){
//          motUtulisateur = prompt ('Entrez le mot : ' + listeProposition[i] )
//             if (motUtulisateur === listeProposition[i]) {
//                 score++
//             }
            
//     }
//     return score
//  }

//  function lancerJeu (){
//     let choix = choisirPhrasesOuMots()
//     let score = 0
//     let nbMotsproposés = 0
  
//     if(choix === 'mots') {
//        score = lancerBoucleDeJeu(listeMots)
//         nbMotsproposés = listeMots.length
//     } else {
//        score = lancerBoucleDeJeu(listePhrases)
//         nbMotsproposés = listePhrases.length
//     }
 
//     afficherResultat(score, nbMotsproposés)
//  }

//  lancerJeu()


 // On rétrouve les nombres pairs
//  function comptable(number) {
//     // Verfication si les nombre est pair ou impair
//     if(number % 2 === 0) {
//         console.log('votre nombre est pair ' + number)
        
//     } else{
//         console.log('Votre nombre est impair ' + number)
//     }
    
//  }

//  comptable(51)


// function salutation (nom) {
//     return  'salut '  + nom + '. Est-ce que tu vas bien aujourd\'hui?'
// }

// console.log(salutation('Fenitra'))
// console.log(salutation('Jey'))



// function factoriel (number) {
//     if ( number < 0) {
//         return 'Les factoriele ne prend pas le compte nombre négative'
//     }

//     if (number === 0 || number === 1) {
//         return 1
//     }

//     let résultat = 1
//     for (let i = 2; i <= number; i++) {
//         résultat *= i
//     }
//     return résultat
// }

// console.log(factoriel(1))

// function nombrePlusGrand (a, b, c) {
//     if( a >= b && a >= c) {
//         return a
//     } else if (b >= a && b >= c) {
//         return b
//     } else {
//         return c
//     }
// }

// console.log(nombrePlusGrand(55, 10, 0))

// function nombrePair (number) {
//     if(number % 2 === 0) {
//         console.log ('Vous avez ecrit le nombre pair est ' + number)
//     } else {
//         console.log('Vous n\'avez pas ecrit le nombre pair. donc, du coup vous avez ecrit le nombre impair est ' + number)
//     }
// }

// nombrePair(111)



// function isPair1 (a, fn) {
//     if (a % 2 === 0) {
//         fn(a)
//     } else {
//         console.log('Votre nombre est impair ' + a)
//     }
// }
// isPair1(41, function (n) {
//     console.log('Votre nombre est pair ' + n)
// })



// let notes = [12, 15, 22];
// function upNotes (notes) {
//     notes++
// }

// upNotes(notes)
// console.log(notes) 


// let appel = {
//     firstName: 'Danio',
//     lasteName: 'Bendo',
//     fullName: function() {
//         console.log(`${this.firstName}  ${this.lasteName}`)
//     }
// }

// appel.fullName()

// function saluer() {
//     console.log("Bonjour, je suis " + `${this.nom}  ${this.prenom}`);
// }

// const personne = {
//     nom: "Danio",
//     prenom: "Jr"

// };

// saluer.call(personne); // Affiche : "Bonjour, je suis Danio"

// let maFunction = function (parm1, parm2) {
    
// }

// function isPair (a, fn) {
//     if (a % 2 === 0) {
//         fn (a)
//     }else {
//    console.log('Votre nombre est impair ' + a)
// }}

// isPair(7, function(n) {
//     console.log('Votre nombre est pair ' + n)
// })

// /*
// 1-On génère un nombre aléatoire entre 0 et 10.
// 2-L'utilisateur a 3 essais pour deviner le nombre.
// 3-La fonction isRight(n) vérifie si la réponse de l'utilisateur est correcte.
// 4-La fonction guess() permet à l'utilisateur de faire une tentative.
// // */

// function nombreAleatoire (max) {
//     return Math.floor(Math.random() * max + 1);
// }

// const solution = nombreAleatoire (50);
// console.log(solution);

// function isRight(nombre) {
//     return solution === nombre;
// }

// function guess() {
//     const number = prompt('Entrez un nombre entre 1 à 50') * 1;
//     return isRight(number);
// }

// for(let i = 0; i < 3; i++) {
//     if (guess()) {
//         console.log('Bravo! vous avez deviné le nombre');
//         break;
//     } else if (i === 2) {
//           console.log('Désolée! vous avez épuisé le nombre');
//     }else {
//         console.log('Incorrect! essayez encore');
//     }
// }

// // /*
// // 1-Si le nombre est inférieur ou égal à 1, il n'est pas premier.
// // 2-Vérifier si le nombre est divisible par n'importe quel entier de 2 jusqu'à la racine carrée du nombre.
// // -Si le nombre est divisible par l'un de ces entiers, il n'est pas premier.
// // -Sinon, il est premier.
// // */

// function isPremiers (n) {
//     if (n <= 1) {
//         return false
//     }

//     for (let i = 2; i <= Math.floor(n); i++) {
//         if( n % 2 === 0) {
//             return false
//         }
//     }
//     return true
// }

// const nombres = 16
// if (isPremiers(nombres)) {
//     console.log(nombres + ' est une nombre premier')
// } else {
//     console.log(nombres + ' n\'est pas une nombre premier')
// }

// function isFactoriel (max) {
//     return Math.floor(Math.random() * max + 1) 
// }


// let baliseZoneProposition = document.getElementById("zoneProposition");
// console.log(baliseZoneProposition);
// console.log(baliseZoneProposition.clientHeight);

// let baliseZonePropositionSpan = document.querySelector("#zoneProposition span");
// console.log(baliseZonePropositionSpan.clientHeight);

// let NouveleImg = document.querySelector(".sarykabary img");
// NouveleImg.setAttribute("src", "./images/foloir.webp");
// console.log(NouveleImg)


//mon deux varible
// let contenuTitre = "AZERTYPE";
// let ContenuParagraphe = "L\'aplication pour apprendre plus vite !"

// // je crée trois élement un div, un titre, un paragraphe

// let nouvelleDiv = document.createElement("div")
// let nouveauTitre = document.createElement("h1")
// let nouveauParagraphe = document.createElement("p")

// //j’insère du texte créé avec les variables dans le titre et le paragraphe ;

// nouveauTitre.textContent = contenuTitre
// nouveauParagraphe.textContent =  ContenuParagraphe


// //j’insère du titre et du paragraphe en tant qu’enfants de la div ;

// nouvelleDiv.appendChild(nouveauTitre)
// nouvelleDiv.appendChild(nouveauParagraphe)

// let body = document.querySelector("div")

// body.appendChild(nouvelleDiv)

// // Afficher le contenu de la nouvelle div dans la console
// console.log(nouvelleDiv);


// let contenuTitre = "AZERTYPE";
// let ContenuParagraphe = "L\'aplication pour apprendre plus vite !";

// let header = `
//       <div>
      
//            <h1>${contenuTitre}</h1>
//            <p>${ContenuParagraphe}</p>

//       </div>
// `;

// let body = document.querySelector("body")
// body.innerHTML = header

let monButton = document.getElementById("monButton");
monButton.addEventListener("click", () => {
    monButton.setAttribute("href", "https://www.facebook.com")
    console.log("Vous avez cliqué sur le bouton")
})


