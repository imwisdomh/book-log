import { View, TextInput, Text } from "react-native";
import styles from "@screens/BookDetail/styles";

const PageInput = ({ currentPage, handlePageChange, totalPages, handleTotalPagesChange }) => {
    return (
        <View style={styles.pageInputContainer}>
            <TextInput
                style={styles.pageInput}
                keyboardType="numeric"
                value={currentPage}
                onChangeText={handlePageChange}
            />
            <Text style={styles.pageText}>/</Text>
            <TextInput
                style={styles.pageInput}
                keyboardType="numeric"
                value={String(totalPages)}
                onChangeText={handleTotalPagesChange}
            />
            <Text style={styles.pageText}>P</Text>
        </View>
    );
};

export default PageInput;
