import {NavigationContainer} from "@react-navigation/native";
import Login from "./Screens/Login";
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Map from "./Screens/Map";
import CustomDrawer from "./Screens/CustomDrawer";


export type RootStackParamList = {
    LoginScreen: undefined;
    MapScreen: undefined;
    DrawerScreen: undefined;
}

export default function App() {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="MapScreen" component={Map} options={{headerShown: false}}/>
                <Stack.Screen name="DrawerScreen" component={CustomDrawer} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


