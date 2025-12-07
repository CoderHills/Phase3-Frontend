import React from "react";

const API_URL = "https://phase3-backend-1.onrender.com";

export default function BookList({ books, onBookDeleted }) {
  if (!books.length) return <p style={{ textAlign: "center" }}>No books yet.</p>;

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/books/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        onBookDeleted(); // reload books after deletion
      } else {
        console.error("Failed to delete book");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="book-list">
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
            {book.description && <div className="description">{book.description}</div>}
            <button className="delete-btn" onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
