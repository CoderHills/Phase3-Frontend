import React, { useState } from "react";

const API_URL = "https://phase3-backend-1.onrender.com";

export default function AddBook({ onBookAdded }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !author) return;

    try {
      const res = await fetch(`${API_URL}/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, description }),
      });

      if (res.ok) {
        setTitle("");
        setAuthor("");
        setDescription("");
        onBookAdded();
      } else {
        console.error("Failed to add book");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="add-book" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}
