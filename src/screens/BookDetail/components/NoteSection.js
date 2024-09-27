import { View, TextInput } from "react-native";
import styles from "@screens/BookDetail/styles";

const NoteSection = ({ note, setNote }) => {
    return (
        <View style={styles.noteContainer}>
            <TextInput
                style={styles.noteInput}
                multiline
                numberOfLines={4}
                value={note}
                onChangeText={setNote}
                placeholder="책에 대한 메모를 여기에 작성하세요."
            />
        </View>
    );
};

export default NoteSection;
