// Chiedi all'utente il suo nome

var nomeUtente = prompt ("Come ti chiami?");
console.log(nomeUtente);

//Chiedi all'utente il suo cognome 

var cognomeUtente = prompt ("Quale è il tuo cognome?");
console.log(cognomeUtente); 

//Chiedi all'utente quale sia il suo colore preferito

var colorePreferitoUtente = prompt ("Qual è il tuo colore preferito?");
console.log(colorePreferitoUtente);

//Output 

document.getElementById("password-generata").innerHTML = nomeUtente + cognomeUtente + colorePreferitoUtente + 21;