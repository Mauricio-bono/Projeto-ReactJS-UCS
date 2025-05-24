import React from 'react';
import { IBook } from '../interfaces/book.interface';

interface BookListProps {
    books: IBook[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
    return (
        <div>
            <h2 style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#2563eb",
                marginBottom: "16px",
                textAlign: "center"
            }}>
                Lista de Livros
            </h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {books.length === 0 && (
                    <li style={{ color: "#6b7280", textAlign: "center" }}>Nenhum livro cadastrado ainda.</li>
                )}
                {books.map((book) => (
                    <li
                        key={book.id}
                        style={{
                            background: "#f3f4f6",
                            borderRadius: "8px",
                            padding: "12px 16px",
                            marginBottom: "12px",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <span style={{ fontWeight: "bold", color: "#111827" }}>{book.title}</span>
                        <span style={{ color: "#374151" }}>{book.author} {book.year && `(${book.year})`}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;