import type { LayoutLoad } from './$types';

//typescript declaration
interface Book {
  isbn: string;
  // altre proprietà esistenti del libro
  [key: string]: any;
}

export const load: LayoutLoad = async ({ data: { books }, fetch }) => {
  // Assicurati che books sia un array
  if (!books || !Array.isArray(books)) {
    return { books: [] };
  }

  // Funzione per fetchare i dati da Google Books API per un singolo ISBN
  // Nota: ora usa l'istanza di fetch passata dalla funzione load
  const fetchGoogleBooksData = async (isbn: string) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
      
      if (!response.ok) {
        console.error(`Errore nel recupero dei dati per ISBN ${isbn}: ${response.status}`);
        return null;
      }
      
      const data = await response.json();
      
      // Ritorna il primo risultato se esiste
      return data.items && data.items.length > 0 ? data.items[0] : null;
    } catch (error) {
      console.error(`Errore durante il fetch per ISBN ${isbn}:`, error);
      return null;
    }
  };

  // Arricchisci ogni libro con i dati da Google Books API
  const enrichedBooks = await Promise.all(
    books.map(async (book: Book) => {
      
      // Fetch dei dati da Google Books
      const googleBooksData = await fetchGoogleBooksData(book.isbn);
      
      // Restituisci un nuovo oggetto che include i dati originali e quelli di Google Books
      return {
        ...book,
        googleBooksData,
        // Estrai alcune proprietà utili e aggiungile direttamente all'oggetto libro
        googleTitle: googleBooksData?.volumeInfo?.title,
        googleAuthors: googleBooksData?.volumeInfo?.authors,
        googleDescription: googleBooksData?.volumeInfo?.description,
        googleCoverImage: googleBooksData?.volumeInfo?.imageLinks?.thumbnail,
        prova: "prova"
      };
    })
  );

  return {
    books: enrichedBooks
  };
};