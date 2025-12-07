import React, { useState, useEffect } from "react";
import AddBook from "./AddBook.jsx";
import BookList from "./BookList.jsx";

const API_URL = "https://phase3-backend-1.onrender.com";


export default function App() {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    try {
      const res = await fetch(`${API_URL}/books`);
      const data = await res.json();
      setBooks(data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <>
      <div className="hero-form">
        <h1>Online Bookstore</h1>
        <AddBook onBookAdded={loadBooks} />
      </div>

      <div className="book-list-container">
        <BookList books={books} />
      </div>
    </>
  );
}
