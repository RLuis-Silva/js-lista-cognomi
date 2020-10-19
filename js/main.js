var arrayCognome = ["Bianchi", "Rossi", "Dunzioni", "Balsano", "Giorgini"];
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


// console.log(newArrayCognome.sort() );