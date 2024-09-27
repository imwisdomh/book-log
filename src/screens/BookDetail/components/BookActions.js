import { View, TouchableOpacity, Text } from "react-native";
import styles from "@screens/BookDetail/styles";

const BookActions = ({ handleDeleteBook, handleCompleteBook }) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteBook}>
                <Text style={styles.buttonText}>삭제</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.completeButton} onPress={handleCompleteBook}>
                <Text style={styles.buttonText}>완료</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BookActions;
