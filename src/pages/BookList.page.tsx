import React from 'react';
import { IBook } from '../interfaces/book.interface';

interface BookListProps {
    books: IBook[];
    onDelete: (id: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onDelete }) => {
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
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <div>
                            <span style={{ fontWeight: "bold", color: "#111827" }}>{book.title}</span>
                            <span style={{ color: "#374151", marginLeft: 8 }}>{book.author} {book.year && `(${book.year})`}</span>
                        </div>
                        <button
                            onClick={() => onDelete(book.id)}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                marginLeft: "12px"
                            }}
                            title="Excluir livro"
                        >
                            <svg width="20" height="20" fill="#dc2626" viewBox="0 0 24 24">
                                <path d="M3 6h18v2H3V6zm2 3h14l-1.5 12.5a2 2 0 0 1-2 1.5H8.5a2 2 0 0 1-2-1.5L5 9zm5 2v7h2v-7h-2zm4 0v7h2v-7h-2zm-8 0v7h2v-7H6z"/>
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;