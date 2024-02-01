import React, { useEffect, useState } from 'react'
import BookCards from '../BookCards';

const OtherBooks = () => {
   const [books, setBooks] = useState([]);

   useEffect(() => {
     fetch("http://localhost:3000/all-books")
       .then((res) => res.json())
       .then((data) => setBooks(data.slice(6, 12)));
   }, []);

   return (
     <div>
       <BookCards books={books} headline="Other Books" />
     </div>
   );
}

export default OtherBooks