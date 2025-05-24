import React, { useState } from 'react';
import { IBook } from '../interfaces/book.interface';

interface BookFormProps {
  onAddBook: (book: IBook) => void;
}

const BookForm: React.FC<BookFormProps> = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !author) return;
    onAddBook({
      id: Date.now().toString(),
      title,
      author,
      year,
    });
    setTitle('');
    setAuthor('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <label htmlFor="title" style={{ display: "block", color: "#374151", marginBottom: "4px" }}>Título</label>
        <input
          id="title"
          style={{
            width: "100%",
            padding: "8px 12px",
            border: "1px solid #d1d5db",
            borderRadius: "6px",
            outline: "none",
            fontSize: "1rem",
            background: "#f3f4f6",
            transition: "border 0.2s",
          }}
          type="text"
          placeholder="Digite o título do livro"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="author" style={{ display: "block", color: "#374151", marginBottom: "4px" }}>Autor</label>
        <input
          id="author"
          style={{
            width: "100%",
            padding: "8px 12px",
            border: "1px solid #d1d5db",
            borderRadius: "6px",
            outline: "none",
            fontSize: "1rem",
            background: "#f3f4f6",
            transition: "border 0.2s",
          }}
          type="text"
          placeholder="Digite o nome do autor"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="year" style={{ display: "block", color: "#374151", marginBottom: "4px" }}>Ano</label>
        <input
          id="year"
          style={{
            width: "100%",
            padding: "8px 12px",
            border: "1px solid #d1d5db",
            borderRadius: "6px",
            outline: "none",
            fontSize: "1rem",
            background: "#f3f4f6",
            transition: "border 0.2s",
          }}
          type="text"
          placeholder="Digite o ano de publicação"
          value={year}
          onChange={e => setYear(e.target.value)}
        />
      </div>
      <button
        type="submit"
        style={{
          width: "100%",
          background: "#2563eb",
          color: "#fff",
          fontWeight: "bold",
          padding: "10px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          marginTop: "8px",
          fontSize: "1rem"
        }}
      >
        Cadastrar Livro
      </button>
    </form>
  );
};

export default BookForm;