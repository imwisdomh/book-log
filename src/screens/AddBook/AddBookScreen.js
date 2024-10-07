import { useState } from "react";
import { Alert, View, TextInput, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import BookItem from "@components/BookItem";
import styles from "@screens/AddBook/styles";

const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes?q=";

const AddBookScreen = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [books, setBooks] = useState([]);
    const navigation = useNavigation();
    const route = useRoute();

    const searchBooks = async (query) => {
        try {
            const response = await fetch(`${GOOGLE_BOOKS_API}${query}`);
            const data = await response.json();
            if (data.items) {
                setBooks(data.items);
            } else {
                setBooks([]);
            }
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    const handleSearch = (text) => {
        setSearchQuery(text);
        if (text.length > 2) {
            searchBooks(text);
        } else {
            setBooks([]);
        }
    };

    const handleBookSelect = (book) => {
        const { title, authors, imageLinks, pageCount } = book.volumeInfo;
        const newBook = {
            id: book.id,
            title,
            authors: authors?.join(", "),
            thumbnail: imageLinks?.thumbnail,
            pageCount,
        };

        const existingBook = route.params?.existingBooks?.find((b) => b.id === newBook.id);

        if (existingBook) {
            Alert.alert("이미 추가된 책입니다", `『${newBook.title}』은/는 이미 추가된 책입니다.`);
        } else {
            navigation.navigate("Home", { newBook, initialTab: "reading" });
        }
    };

    const renderBookItem = ({ item }) => {
        const book = {
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors?.join(", "),
            thumbnail: item.volumeInfo.imageLinks?.thumbnail,
        };
        return <BookItem item={book} onPress={() => handleBookSelect(item)} />;
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.bookSearch}
                placeholder="제목, 작가 명으로 검색"
                placeholderTextColor="#999"
                value={searchQuery}
                onChangeText={handleSearch}
            />
            <FlatList data={books} keyExtractor={(item, index) => item.id + index} renderItem={renderBookItem} />
        </View>
    );
};

export default AddBookScreen;
