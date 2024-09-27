import { View, TextInput, Text } from "react-native";
import styles from "@screens/BookDetail/styles";

const PageInput = ({ currentPage, handlePageChange, totalPages }) => {
    return (
        <View style={styles.pageInputContainer}>
            <TextInput
                style={styles.pageInput}
                keyboardType="numeric"
                value={currentPage}
                onChangeText={handlePageChange}
            />
            <Text style={styles.pageText}>/ {totalPages} P</Text>
        </View>
    );
};

export default PageInput;
