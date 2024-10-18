import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const handleDeleteBook = async (book, navigation) => {
    Alert.alert(
        "삭제",
        "이 책을 삭제하시겠습니까?",
        [
            {
                text: "취소",
                style: "cancel",
            },
            {
                text: "삭제",
                style: "destructive",
                onPress: async () => {
                    try {
                        const savedBooks = await AsyncStorage.getItem("books");
                        if (savedBooks) {
                            const booksArray = JSON.parse(savedBooks);
                            const updatedBooks = booksArray.filter((item) => item.id !== book.id);
                            await AsyncStorage.setItem("books", JSON.stringify(updatedBooks));
                            await AsyncStorage.removeItem(`book_${book.id}_currentPage`);
                            await AsyncStorage.removeItem(`book_${book.id}_totalPages`);
                            await AsyncStorage.removeItem(`book_${book.id}_note`);
                            navigation.navigate("Home", { deletedBookId: book.id });
                        }
                    } catch (error) {
                        console.error("Failed to delete book:", error);
                    }
                },
            },
        ],
        { cancelable: true }
    );
};

const handleCompleteBook = async (book, navigation) => {
    Alert.alert(
        "완료",
        "이 책을 읽은 책으로 이동하시겠습니까?",
        [
            {
                text: "취소",
                style: "cancel",
            },
            {
                text: "완료",
                onPress: async () => {
                    try {
                        const updatedBook = { ...book, status: "completed" };
                        const savedBooks = await AsyncStorage.getItem("books");
                        if (savedBooks) {
                            const booksArray = JSON.parse(savedBooks);
                            const updatedBooks = booksArray.map((item) => (item.id === book.id ? updatedBook : item));
                            await AsyncStorage.setItem("books", JSON.stringify(updatedBooks));
                            navigation.navigate("Home", { updatedBook });
                        }
                    } catch (error) {
                        console.error("Failed to complete book:", error);
                    }
                },
            },
        ],
        { cancelable: true }
    );
};

export { handleDeleteBook, handleCompleteBook };
