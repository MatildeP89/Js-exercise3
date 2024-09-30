/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/


const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}


let discount = 0.70
let prices = [200, 5, 2]
const shippingCost = 20
let totale = 0
let carrello = 0
let arrayUsers = []
let ambassadorUsers=[]
arrayUsers.push(marco, paul, amy)

for (a = 0; a < prices.length; a++) { totale += prices[a] }

let utenteCheEffettuaLAcquisto = marco


for (b=0; b<arrayUsers.length; b++) {

  if (utenteCheEffettuaLAcquisto.isAmbassador === true) {carrello=totale*discount

    if (carrello<100) {console.log("Ciao " + utenteCheEffettuaLAcquisto.name + ", essendo un cliente Ambassador, è stato applicato uno sconto del 30% sul carrello. Il totale da pagare è quindi di " + carrello + " euro, più le spese di spedizione che ammontano a " + shippingCost + " euro.")}
    else {console.log("Ciao " + utenteCheEffettuaLAcquisto.name + ", essendo un cliente Ambassador, è stato applicato uno sconto del 30% sul carrello. Inoltre, avendo speso più di 100 euro, avrai diritto alla spedizione gratuita per un totale di " + carrello + " euro")}}

    else {carrello=totale;

  if (carrello<100) {console.log("Ciao " + utenteCheEffettuaLAcquisto.name + ", il totale da pagare è di " + carrello + " euro, più le spese di spedizione che ammontano a " + shippingCost + " euro.")}
    else {console.log("Ciao " + utenteCheEffettuaLAcquisto.name + ", avendo speso più di 100 euro, avrai diritto alla spedizione gratuita per un totale di " + carrello + " euro.") } }

        }


        for (d=0; d<arrayUsers.length; d++) {
          if (arrayUsers[d].isAmbassador===true) {console.log("Nome utente:" + arrayUsers[d].name + ", cognome utente: " + arrayUsers[d].lastName + " è Ambassador.")}

          else {console.log("Nome utente:" + arrayUsers[d].name + ", cognome utente: " + arrayUsers[d].lastName + " non è Ambassador.")}

        }

      
        for (x=0; x<arrayUsers.length; x++) {
          if (arrayUsers[x].isAmbassador===true) {ambassadorUsers.push(arrayUsers[x])
            console.log(ambassadorUsers)
          }

        }







