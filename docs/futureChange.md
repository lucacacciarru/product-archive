# Implementazioni in un caso reale

All'interno dell'applicazione ci sarebbero alcune implementazioni che avrei aggiunto in un caso reale:

### Utilizzo di una libreria per la gestione dei form

All'interno dei componenti creati che presentano form/input è presente una gestione senza alcune librerie. In un caso reale utilizzare [Formik](https://formik.org/) oppure [React-hook-form](https://react-hook-form.com/) per avere una gestione più semplice dei form.

### Utilizzo di pagination e infinite scrolling

In questo stato l'applicazione quando va a fetchare i prodotti prende tutti gli elementi che sono presenti all'interno del database, ciò è impensabile in un caso reale, dove effettivamente si andrebbe a prendere solamente un certo numero e specifiche informazioni dell'elemento, per poi poterli gestire con un sistema di `pagination` e/o `infinite scrolling`, in modo da non fetchare tutti gli elementi nello stesso momento.

### Inserire uno state per il loading

Per poter gestire le richieste e poter offrire all'utente una risposta visiva di quando un'operazione si sta eseguendo si sarebbe potuto aggiungere uno state nello store che segna lo stato delle operazioni asincrone.

Da segnare che con l'utilizzo di Rtk-Query non avremmo bisogno della creazione di questo stato, perché viene autogenerata ed è possibile utilizzarlo facilmente tramite gli hook offerti dalla libreria.

### Inserire uno sistema di notification

Un altro elemento che avrei aggiunto in un caso reale sarebbe stato un sistema di notifiche all'interno dello store, che avrebbe lanciato dei toast/alert in modo per avvisare l'utente se una determina operazione è andata a buon fine o meno, ad esempio quando si va a modificare o creare un prodotto.
