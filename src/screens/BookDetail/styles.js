import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.015,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    coverImage: {
        width: width * 0.35,
        height: height * 0.25,
        resizeMode: "contain",
        marginBottom: height * 0.015,
    },
    title: {
        fontSize: width * 0.05,
        fontWeight: "bold",
        marginBottom: height * 0.008,
        textAlign: "center",
    },
    author: {
        fontSize: width * 0.04,
        marginBottom: height * 0.008,
        textAlign: "center",
    },
    progressContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: height * 0.015,
    },
    progressText: {
        fontSize: width * 0.04,
        fontWeight: "bold",
        marginBottom: height * 0.008,
    },
    progressBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: height * 0.008,
        width: "90%",
    },
    adjustButton: {
        padding: width * 0.015,
    },
    adjustButtonText: {
        fontSize: width * 0.045,
        fontWeight: "bold",
    },
    progressBar: {
        flex: 1,
        height: height * 0.012,
        backgroundColor: "#e0e0e0",
        borderRadius: 5,
        overflow: "hidden",
        marginHorizontal: width * 0.015,
    },
    progressFill: {
        height: "100%",
        backgroundColor: "#3b5998",
    },
    pageInputContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    pageInput: {
        width: width * 0.12,
        fontSize: width * 0.035,
        color: "#555",
        textAlign: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginRight: width * 0.01,
    },
    pageText: {
        fontSize: width * 0.035,
        color: "#555",
    },
    noteContainer: {
        width: "90%",
        marginTop: height * 0.03,
    },
    noteInput: {
        height: height * 0.23,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        padding: width * 0.03,
        textAlignVertical: "top",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        marginTop: height * 0.035,
    },
    completeButton: {
        flex: 1,
        marginLeft: width * 0.015,
        padding: height * 0.015,
        backgroundColor: "#4CAF50",
        borderRadius: 5,
        alignItems: "center",
    },
    deleteButton: {
        flex: 1,
        marginRight: width * 0.015,
        padding: height * 0.015,
        backgroundColor: "#FF6347",
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: width * 0.04,
        fontWeight: "bold",
    },
    bookInfoContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginBottom: height * 0.015,
        width: "90%",
    },
    bookInfoContainerSmall: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: height * 0.015,
        width: "90%",
    },
    bookImageSmall: {
        width: width * 0.2,
        height: height * 0.15,
        marginRight: width * 0.04,
    },
    bookTextContainer: {
        flex: 1,
    },
});

export default styles;
