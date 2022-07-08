// Scriviamo un'applicazione JavaScript che permetta di soddisfare i seguenti criteri:

// Da utente voglio trovare al caricamento della pagina una barra di testo vuota e un bottone "Aggiungi".
// Da utente voglio trovare al caricamento della pagina trovare una lista, inizialmente vuota.
// Da utente voglio che, dopo aver riempito l'input, premendo invio possa aggiungere un elemento alla lista. L'elemento deve contenere:
// Un input di tipo checkbox;
// Uno span con il testo dell'input;
// Da utente voglio che dopo ogni submit il form si svuoti.
// Da utente voglio poter segnare alcuni elementi come fatti cliccando sull'input.

//primo tentativo
// const addButton = document.querySelector(".add-button");
// const listItem = document.querySelector(".ul-item");
// const mainInput = document.querySelector(".insert-task");

// addButton.addEventListener("click", function () {
//   console.log(listItem.textContent);
//   //let listText = listItem.textContent;
//   listItem.innerHTML = mainInput.value;
// });

const addButton = document.querySelector(".add-button");
const listItem = document.querySelector(".ul-item");
const mainInput = document.querySelector(".insert-task");
// const valueInput = mainInput.value; //prende il valore solo al momneto dell'assegnazione, per evitarlo dovrei usare il getter o prendere il valore ogni volta che ho la funzione
// console.log("b", typeof valueInput);

addButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (mainInput.value.length === 0) {
    alert("...");
  } else {
    listItem.innerHTML += `<li><input type="checkbox"/><span>${mainInput.value}</span></li>`;
    // Per avere più di una task in lista metto += così si ripete tutto quanto
  }
  mainInput.value = ""; //Svuota l'input dopo il click
});
