console.log('JS OK');

/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
BONUS:
1- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
*/

//! Suddivisione steb-by-step
//! Creazione funzioni utili

// Randomizzare il numero
const getRandomNumber = (numb) => {
    return Math.floor(Math.random() * numb) + 1;
}

// Funzione per creare le celle
function createCell(num) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = num;
    cell.innerText = num;
    return cell;
}

function createParticularCell(number, difficulty) {
    for (let i = 1; i <= number; i++) {
        const cell = createCell(i);
        resultElement.appendChild(cell);
        cell.classList.add(difficulty);
        cell.addEventListener('click', function () {
            cell.classList.toggle('clicked');
        })
    }
}

const play = () => {
    button.innerText = ('RIGIOCA');
    resultElement.innerText = '';

    switch (difficulty.value) {
        case '1':
            createParticularCell(100, 'd-one');
            break;
        case '2':
            createParticularCell(81, 'd-two');
            break;
        case '3':
            createParticularCell(49, 'd-three');
            break;
        default:
            alert('Devi scegliere una delle difficoltà!');
    }

    const MAX_BOMBS = 16;
    let attemps = 0;
    const bombs = []; //lista bombe




}




//! ------------------------------------------------------
//! EFFETTIVO SVOLGIMENTO DEL PROGRAMMA
//! ------------------------------------------------------


// generazioni costanti
const difficulty = document.getElementById('difficulty');
const resultElement = document.getElementById('result');
const button = document.getElementById('button');



button.addEventListener('click', play);






