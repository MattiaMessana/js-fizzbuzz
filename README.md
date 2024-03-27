# FIZZBUZZ

Scrivi un programma che stampi in console i numeri da 1 a 100,
 ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
 **BONUS 1:**
 Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
 **BONUS 2:**
 Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

 ## SVOLGIMENTO 

1. creiamo una grilia dove inseriremo una lista di numeri utilizzando html e css per stilizzarli 
2. scriviamo la lista dei numeri da 1 a 1000 specificando che :
    ``
        se sono mutlipli di tre; 
            allora scrivi Fizz;
        altrimenti se sono multipli di 5;
            allora scrivi Buzz;
        altrimetni se sono multipli sia di 3 che di 5;
            allora scrivi FizzBuzz;
        altrimenti; 
            scrivi il numero;
    ``               