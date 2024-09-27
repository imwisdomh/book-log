import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useBooks = (routeParams) => {
    const [books, setBooks] = useState([]);
    const [currentTab, setCurrentTab] = useState("reading");

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const savedBooks = await AsyncStorage.getItem("books");
                if (savedBooks) setBooks(JSON.parse(savedBooks));
            } catch (error) {
                console.error("Failed to load books:", error);
            }
        };
        loadBooks();
    }, []);

    useEffect(() => {
        const updateBooks = async (updatedBooks) => {
            try {
                await AsyncStorage.setItem("books", JSON.stringify(updatedBooks));
            } catch (error) {
                console.error("Failed to save books:", error);
            }
            setBooks(updatedBooks);
        };

        if (routeParams?.newBook) {
            setBooks((prevBooks) => {
                const exists = prevBooks.some((book) => book.id === routeParams.newBook.id);
                const updatedBooks = exists ? prevBooks : [...prevBooks, { ...routeParams.newBook, status: "reading" }];
                updateBooks(updatedBooks);
                return updatedBooks;
            });
        }

        if (routeParams?.deletedBookId) {
            setBooks((prevBooks) => {
                const updatedBooks = prevBooks.filter((book) => book.id !== routeParams.deletedBookId);
                updateBooks(updatedBooks);
                return updatedBooks;
            });
        }

        if (routeParams?.updatedBook) {
            setBooks((prevBooks) => {
                const updatedBooks = prevBooks.map((book) =>
                    book.id === routeParams.updatedBook.id ? routeParams.updatedBook : book
                );
                updateBooks(updatedBooks);
                return updatedBooks;
            });
        }

        if (routeParams?.initialTab) {
            setCurrentTab(routeParams.initialTab);
        }
    }, [routeParams]);

    return { books, currentTab, setCurrentTab };
};

export { useBooks };
