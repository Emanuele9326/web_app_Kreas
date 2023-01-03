<h1 algin="center">Web app per un e-commerce di un'azienda di carne sintetica</h1>
<h4>L'applicazione è stata deployata su Netlify : https://incandescent-toffee-0c303a.netlify.app</h4>

<details open="open">
  <summary>Sommario</summary>
  <ol>
    <li>
      <a href="#informazioni-sul-progetto">Informazioni sul progetto</a>
      <ul>
        <li><a href="#costruito-con">Costruito con</a></li>
      </ul>
    </li>
   <li><a href="#descrizione">Descrizione</a>
     <ul>
        <li><a href="#Download-e-testare-app-in-locale">Download e testare app in locale</a></li>
      </ul>
    </li>
   <li><a href="#licenza">Licenza</a></li>
  <ol>
</details>

<!-- Informazioni sul progetto-->

## Informazioni sul progetto

L'azienda Kreas vuole aprire un nuovo piccolo e-commerce totalmente mobile. Per sperimentare questa nuova possibilità di business chiede di sviluppare una nuova web app dall’esperienza minimale.



#### <h3>Costruito con:</h3>

<b>Framework</b>:

- [Vue.js] (https://vuejs.org/)
- [Pinia] (https://pinia.vuejs.org/)
- [Pinia-plugin-persistedstate] (https://github.com/prazdevs/pinia-plugin-persistedstate)
- [Bootstrap] (https://getbootstrap.com/)
- [API] (https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json)

<!--Descrizione-->

## Descrizione

### Descrizione Funzionamento

L’applicazione web, è un’app mobile first creata in Vue.js, composta da 3 viste principali:

 - Lista dei prodotti (ProductList.vue)
 - Pagina prodotto (ProductPage.vue)
 - Carrello (CartProduct.vue)

L' applicazione recupererà i dati da questa API (https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json) che descrive un array di prodotti, loro prezzo, immagine e descrizione.

Sè il cliente acquista più di 3 prodotti, riceve uno sconto del 10% sul totale.
![](/src/assets/img/imgdescr.png) 

### Download e testare app in locale

- Sul proprio dispositivo è necessario installare: 
   - Nodo.js
   - gestore di pachetti npm. 

L'app può essere testata in locale eseguendo i seguenti passaggi:

- Clonare il repository del progetto in locale 

- Aprire la folder del progetto con un terminale, ed eseguire il comando "npm install".

- Testare l'app in locale tramite il comando "npm run dev".
##
![](/src/assets/img/run.png)

## Licenza

    Distribuito con licenza MIT. Vedere "LICENSE" per ulteriori informazioni.

