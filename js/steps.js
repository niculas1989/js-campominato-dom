// ! FASE INIZIALE

// prendo il bottone
// aggancio un event listener

// ! Dentro la funzione play
// Cambio il testo del bottone 'gioca' => 'rigioca'
// svuoto eventuale contenuto di #result

//! FASE PREPARATIVA
// Settare che le bombe sono 16
// Raccogliamo il livello dalla tendina
// Calcolo, in base al livello scelto, quante celle devo renderizzare
// Inserisco una variabile per contare i punti
// Calcolo, in base al livello scelto, quante sono le celle safe
// Generare i numeri delle bombe
// Renderizzare la griglia (creare le celle (assegnare classe, ecc))
// Aggiungiamo l'event listener alle celle

//! Quando una cella è cliccata
// Controllo se è stata cliccata (REMOVEEVENTLISTENER)
// Controllo se è una bomba (rimuovo l'event listener?)
    // ---- se sì: lancio il game over
// Coloro la cella appropriatamente
// Incrementiamo il punteggio
// Controllo se il punteggio è uguale a MAX_ATTEMPS
    // ---- se sì: lancio il game over

//! AL GAME OVER
// Coloro di rosso tutte le celle comprese nell'array delle bombe
// Rimuovere l'event listener da tutte le celle
// Se ci arriva un gameOver ('win') stampo messaggio vittoria
// Se ci arriva un messaggio gameOver ('lose') stampo messaggio sconfitta e il punteggio