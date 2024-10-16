import { useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useBookData = (book) => {
    const [currentPage, setCurrentPage] = useState("0");
    const [note, setNote] = useState("");
    const [totalPages, setTotalPages] = useState(book.pageCount || 1);
    const progress = Math.floor((parseInt(currentPage) / totalPages) * 100);
    const intervalRef = useRef(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const savedPage = await AsyncStorage.getItem(`book_${book.id}_currentPage`);
                const savedTotalPages = await AsyncStorage.getItem(`book_${book.id}_totalPages`);
                const savedNote = await AsyncStorage.getItem(`book_${book.id}_note`);

                if (savedPage) setCurrentPage(savedPage);
                if (savedTotalPages) setTotalPages(parseInt(savedTotalPages));
                if (savedNote) setNote(savedNote);
            } catch (error) {
                console.error("Failed to load data:", error);
            }
        };
        loadData();
    }, [book.id]);

    useEffect(() => {
        const saveData = async () => {
            try {
                await AsyncStorage.setItem(`book_${book.id}_currentPage`, currentPage);
                await AsyncStorage.setItem(`book_${book.id}_totalPages`, totalPages.toString());
                await AsyncStorage.setItem(`book_${book.id}_note`, note);
            } catch (error) {
                console.error("Failed to save data:", error);
            }
        };
        saveData();
    }, [currentPage, note, totalPages, book.id]);

    return {
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        note,
        setNote,
        progress,
        intervalRef,
    };
};

export { useBookData };
