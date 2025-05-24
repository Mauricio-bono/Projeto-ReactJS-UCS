import React, { useState } from 'react';
import BookForm from '../pages/BookForm.page';
import BookList from '../pages/BookList.page';
import { IBook } from '../interfaces/book.interface';

const MainComponent = () => {
    const [books, setBooks] = useState<IBook[]>([]);

    const addBook = (book: IBook) => {
        setBooks((prevBooks) => [...prevBooks, book]);
    };

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #e0e7ff 0%, #bae6fd 100%)"
        }}>
            <div style={{
                background: "#fff",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                borderRadius: "12px",
                padding: "32px",
                width: "100%",
                maxWidth: "500px",
                boxSizing: "border-box"
            }}>
                <h1 style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#2563eb",
                    marginBottom: "24px"
                }}>
                    Cadastro de Livros
                </h1>
                <div style={{ marginBottom: "32px" }}>
                    <BookForm onAddBook={addBook} />
                </div>
                <BookList books={books} />
            </div>
        </div>
    );
};

export default MainComponent;