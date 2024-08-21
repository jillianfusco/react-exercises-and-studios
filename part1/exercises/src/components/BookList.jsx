export default function BookList() {
   let pageTitle = "Books I'm Reading";
   let book1 = "https://a.media-amazon.com/images/I/51IAdEMjV5L._SY445_SX342_.jpg";
   let book2 = "https://a.media-amazon.com/images/I/51OazXen1ZL._SY445_SX342_.jpg";
   let book3 = "https://a.media-amazon.com/images/I/41VzZU97k9L._SY445_SX342_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Cassandra in Reverse" />
         <img src={book2} alt="Legends and Lattes" />
         <img src={book3} alt="Her Majesty's Royal Coven" />
      </div>      
   );
}