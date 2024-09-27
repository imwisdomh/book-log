import { View, Text, TouchableOpacity } from "react-native";
import styles from "@screens/BookDetail/styles";

const ProgressBar = ({ progress, startIncrementing, startDecrementing, stopChangingPage }) => {
    return (
        <View style={styles.progressContainer}>
            <Text style={styles.progressText}>{progress}%</Text>
            <View style={styles.progressBarContainer}>
                <TouchableOpacity
                    onPressIn={startDecrementing}
                    onPressOut={stopChangingPage}
                    style={styles.adjustButton}
                >
                    <Text style={styles.adjustButtonText}>-</Text>
                </TouchableOpacity>
                <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${progress}%` }]} />
                </View>
                <TouchableOpacity
                    onPressIn={startIncrementing}
                    onPressOut={stopChangingPage}
                    style={styles.adjustButton}
                >
                    <Text style={styles.adjustButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProgressBar;
