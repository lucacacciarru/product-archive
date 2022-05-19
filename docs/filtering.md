# Filtering

Il sistema di filtering è basato sull'attributo `filters` all'interno di Product. La scelta di inserire questi valori all'interno delle store è per averli facilmente disponibile e pronti ad essere modificati.
La modifica di tali filtri, `text` e `category` viene gestita dal hook `useFilterProduct` e il suo componente, `FilterProduct`. All'interno di tale Hook troviamo tutta la logica per modificarli tramite uno useState che inizialmente prende i valori reperiti all'interno dello store tramite un selector. tale hook restituisce delle funzioni di onChange per un input testuale(text) e una select (categoria) che andranno a modificare il valore di questi oggetti anche internamente allo stato, tramite un action sincrona chiamata `filters/update`.

Tra le due funzioni di onChange è presente una differenza inerente al dispatch della action già citata, quando l'input testuale che modifica `text` ha un debouncing che permette di lanciare la action dopo tot secondi, in modo da ottimizzare il lancio del dispatch non lanciando la funzione ogni volta che una lettera viene aggiunta.

Successivamente tramite le `redux-saga` ho potuto fare in modo che la fetchProduct saga venisse triggerata quando questa `filters/update` viene lanciata, in modo tale da ottenere solo gli elementi che rispettano i filtri inseriti.

```
export function* productRootSaga() {
...
  yield takeLatest(updateFilters, fetchOnUpdateFilters);
...
}
```

Ciò è stato fatto per lanciare l'API che fetchasse tutti gli elementi, ma all'interno di questa funzione vengono fetchati i prodotti dal database, e poi vengono filtrati con una funzione `filterByNameAndCategory`:

```
function filterByCategory(allProducts: Product[], categoryFilter?: string) {
  if (!categoryFilter) {
    return allProducts;
  }
  return allProducts.filter((product) => product.category === categoryFilter);
}

function filterByNameAndCategory(
  allProducts: Product[],
  filters?: Partial<Filters>
) {
  const productFilteredByCategory = filterByCategory(
    allProducts,
    filters?.category
  );
  if (!filters?.text) {
    return productFilteredByCategory;
  }

  return allProducts.filter((product) =>
    product.title.toLowerCase().includes((filters?.text || "").toLowerCase())
  );
}

export async function fetchProductApi(params?: Partial<Filters>) {
  const allProducts: Product[] = await wretch(
    `${process.env.REACT_APP_API_URL}/products`
  )
    .get()
    .json();
  const filteredProducts = filterByNameAndCategory(allProducts, params);
  return filteredProducts;
}
```

In un caso reale mi aspetto che sia il Backend, non il frontend, ad effettuare il filtraggio dei prodotti. Per astrarre questa dinamica ho eseguito il filtraggio all'interno della chiamata verso il server così da rendere il test il più possibile vicino ad un caso reale
