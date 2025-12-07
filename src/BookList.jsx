import React from "react";

export default function BookList({ books }) {
  if (!books.length) return <p style={{ textAlign: "center" }}>No books yet.</p>;

  return (
    <div className="book-list">
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
            {book.description && <div className="description">{book.description}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
