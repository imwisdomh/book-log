import { useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useBookData = (book) => {
    const [currentPage, setCurrentPage] = useState("0");
    const [note, setNote] = useState("");
    const totalPages = book.pageCount || 1;
    const progress = Math.floor((parseInt(currentPage) / totalPages) * 100);
    const intervalRef = useRef(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const savedPage = await AsyncStorage.getItem(`book_${book.id}_page`);
                const savedNote = await AsyncStorage.getItem(`book_${book.id}_note`);
                if (savedPage) setCurrentPage(savedPage);
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
                await AsyncStorage.setItem(`book_${book.id}_page`, currentPage);
                await AsyncStorage.setItem(`book_${book.id}_note`, note);
            } catch (error) {
                console.error("Failed to save data:", error);
            }
        };
        saveData();
    }, [currentPage, note, book.id]);

    return {
        currentPage,
        setCurrentPage,
        note,
        setNote,
        progress,
        totalPages,
        intervalRef,
    };
};

export { useBookData };
