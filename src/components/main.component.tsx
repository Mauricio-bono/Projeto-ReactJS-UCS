import React, { useState, useEffect } from 'react';
import BookForm from '../pages/BookForm.page';
import BookList from '../pages/BookList.page';
import { IBook } from '../interfaces/book.interface';
import { db } from '../firebase';
import { collection, getDocs, deleteDoc, query, where, doc } from "firebase/firestore";

const MainComponent = () => {
    const [books, setBooks] = useState<IBook[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const querySnapshot = await getDocs(collection(db, "books"));
            const booksList: IBook[] = [];
            querySnapshot.forEach((docSnap) => {
                booksList.push({ ...(docSnap.data() as IBook), firestoreId: docSnap.id });
            });
            setBooks(booksList);
        };
        fetchBooks();
    }, []);

    const addBook = (book: IBook) => {
        setBooks((prevBooks) => [...prevBooks, book]);
    };

    const handleDelete = async (id: string) => {
        // Encontra o documento pelo campo id salvo no objeto (não o firestoreId)
        const q = query(collection(db, "books"), where("id", "==", id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (docSnap) => {
            await deleteDoc(doc(db, "books", docSnap.id));
        });
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
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
                <BookList books={books} onDelete={handleDelete} />
            </div>
        </div>
    );
};

export default MainComponent;