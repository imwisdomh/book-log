import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
    },
    tabButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    activeTabButton: {
        borderBottomWidth: 2,
        borderBottomColor: "#007aff",
    },
    tabText: {
        fontSize: 16,
        color: "#888",
    },
    activeTabText: {
        color: "#007aff",
    },
    bookList: {
        flexGrow: 1,
        padding: 16,
    },
    addButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 40,
        left: "50%",
        transform: [{ translateX: -80 }],
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        borderRadius: 30,
        borderColor: "#ddd",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 3,
    },
    addButtonText: {
        marginLeft: 8,
        fontSize: 16,
        color: "#000",
    },
});

export default styles;
