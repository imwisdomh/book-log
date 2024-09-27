import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const BookItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.bookItem} onPress={onPress}>
        {item.thumbnail && <Image source={{ uri: item.thumbnail }} style={styles.bookImage} />}
        <View style={styles.bookDetails}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>{item.authors}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    bookItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        marginVertical: 8,
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
    },
    bookImage: {
        width: 50,
        height: 75,
        marginRight: 16,
        borderRadius: 4,
    },
    bookDetails: {
        flex: 1,
    },
    bookTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
    },
    bookAuthor: {
        fontSize: 14,
        color: "#555",
    },
});

export default BookItem;
