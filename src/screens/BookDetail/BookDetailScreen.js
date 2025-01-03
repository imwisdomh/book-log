import { View, Image, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import BookActions from "@screens/BookDetail/components/BookActions";
import NoteSection from "@screens/BookDetail/components/NoteSection";
import PageInput from "@screens/BookDetail/components/PageInput";
import ProgressBar from "@screens/BookDetail/components/ProgressBar";
import { useBookData } from "@screens/BookDetail/hooks/useBookData";
import { useKeyboardStatus } from "@screens/BookDetail/hooks/useKeyboardStatus";
import { handleDeleteBook, handleCompleteBook } from "@screens/BookDetail/utils/bookStateHandlers";
import {
    startIncrementing,
    startDecrementing,
    stopChangingPage,
    handlePageChange,
    handleTotalPagesChange,
} from "@screens/BookDetail/utils/pageChangeHandlers";
import styles from "@screens/BookDetail/styles";

const BookDetailScreen = ({ route, navigation }) => {
    const { book } = route.params;
    const { currentPage, setCurrentPage, totalPages, setTotalPages, note, setNote, progress, intervalRef } = useBookData(book);
    const keyboardVisible = useKeyboardStatus();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={keyboardVisible ? styles.bookInfoContainerSmall : styles.bookInfoContainer}>
                    <Image
                        source={{ uri: book.thumbnail }}
                        style={keyboardVisible ? styles.bookImageSmall : styles.bookImage}
                    />
                    <View style={styles.bookTextContainer}>
                        <Text style={styles.title}>{book.title}</Text>
                        <Text style={styles.author}>{book.authors}</Text>
                    </View>
                </View>
                <ProgressBar
                    progress={progress}
                    startDecrementing={() => startDecrementing(setCurrentPage, intervalRef)}
                    stopChangingPage={() => stopChangingPage(intervalRef)}
                    startIncrementing={() => startIncrementing(setCurrentPage, intervalRef, totalPages)}
                />
                <PageInput
                    currentPage={currentPage}
                    handlePageChange={(input) => handlePageChange(input, totalPages, setCurrentPage)}
                    totalPages={totalPages}
                    handleTotalPagesChange={(input) => handleTotalPagesChange(input, setTotalPages)}
                />
                <NoteSection note={note} setNote={setNote} />
                {!keyboardVisible && (
                    <BookActions
                        handleDeleteBook={() => handleDeleteBook(book, navigation)}
                        handleCompleteBook={() => handleCompleteBook(book, navigation)}
                    />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default BookDetailScreen;
