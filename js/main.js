var arrayCognome = ["bianchi", "rossi", "dunzioni", "balsano", "giorgini"];
var cognomeInput, risposta;
var aggiungi = false;

do{
    cognomeInput = prompt("inserisci il cognome: ");
    arrayCognome.push(cognomeInput);
    // console.log(newArrayCognome);
    risposta = prompt("Vuoi inserire un altro cognome nella lista? premere 's' per aggiungere oppure 'n': ");
    if(risposta == 's'){
        aggiungi = true;
    }else {
        aggiungi = false;
    }

}while(aggiungi == true);

console.log(arrayCognome);

//ordine alfabetico
console.log(arrayCognome.sort());

// cambio indice + 1
//NON FUNZIONA
// for(i = 0; i < arrayCognome.length; i++){
//     newArrayCognome.push();
// }

// console.log(newArrayCognome);