// ! FASE INIZIALE

// prendo il bottone (CHECK)
// aggancio un event listener (CHECK)

// ! Dentro la funzione play
// Cambio il testo del bottone 'gioca' => 'rigioca' (CHECK)
// svuoto eventuale contenuto di #result (CHECK)

//! FASE PREPARATIVA
// Settare che le bombe sono 16 (CHECK)
// Raccogliamo il livello dalla tendina (CHECK)
// Calcolo, in base al livello scelto, quante celle devo renderizzare (CHECK)
// Inserisco una variabile per contare i punti (CHECK)
// Calcolo, in base al livello scelto, quante sono le celle safe
// Generare i numeri delle bombe (CHECK)
// Renderizzare la griglia (creare le celle (assegnare classe, ecc)) (CHECK)
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