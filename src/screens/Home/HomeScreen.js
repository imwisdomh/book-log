import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import BookItem from "@components/BookItem";
import { useBooks } from "@screens/Home/hooks/useBooks";
import styles from "@screens/Home/styles";

const HomeScreen = ({ navigation }) => {
    const route = useRoute();
    const { books, currentTab, setCurrentTab } = useBooks(route.params);

    // 책을 랜더링하는 함수
    const renderBook = ({ item }) => (
        <BookItem item={item} onPress={() => navigation.navigate("BookDetail", { book: item })} />
    );

    return (
        <View style={styles.container}>
            {/* 읽는 중/읽은 책 */}
            <View style={styles.tabContainer}>
                {["reading", "completed"].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[styles.tabButton, currentTab === tab && styles.activeTabButton]}
                        onPress={() => setCurrentTab(tab)}
                    >
                        <Text style={[styles.tabText, currentTab === tab && styles.activeTabText]}>
                            {tab === "reading" ? "읽는 중" : "읽은 책"}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            {/* 현재 선택된 탭에 따른 책 리스트 */}
            <FlatList
                data={books.filter((book) => book.status === currentTab)}
                renderItem={renderBook}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.bookList}
            />
            {/* 새 책 추가 */}
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate("AddBook", { existingBooks: books })}
            >
                <Ionicons name="add-circle-outline" size={24} color="#007aff" />
                <Text style={styles.addButtonText}>새로운 책 추가</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
