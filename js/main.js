var arrayCognome = ["bianchi", "rossi", "dunzioni", "balsano", "giorgini"];
var newArrayCognome = [];
var cognomeInput, risposta;
var aggiungi = false;
var newIndice;
do{
    cognomeInput = prompt("inserisci il cognome: ").trim();
    while(cognomeInput == " "){
        cognomeInput = prompt("Errore hai inserito una stringa vuota, inserisci un cognome valido: ").trim();
    }
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
for(var i = 0; i < arrayCognome.length; i++){
    for(var j = 1; j == arrayCognome.length; j++ ){
        newArrayCognome.push(arrayCognome[i]);
        // newIndice = newArrayCognome.indexOf(newArrayCognome[j]);
    }
   
}

console.log(newArrayCognome);