import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@screens/Home/HomeScreen";
import AddBookScreen from "@screens/AddBook/AddBookScreen";
import BookDetailScreen from "@screens/BookDetail/BookDetailScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="AddBook" component={AddBookScreen} options={{ title: "Add a New Book" }} />
                <Stack.Screen name="BookDetail" component={BookDetailScreen} options={{ title: "Book Details" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
