import {NavigationContainer} from "@react-navigation/native";
import Login from "./Screens/Login";
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Map from "./Screens/Map";
import CustomDrawer from "./Components/CustomDrawer";
import Explore from "./Screens/Explore";
import Pub from "./Screens/Pub";
import {MapContextProvider} from "./Context/MapContext";
import {BasketContextProvider} from "./Context/BasketContext";


export type RootStackParamList = {
    LoginScreen: undefined;
    MapScreen: undefined;
    DrawerScreen: undefined;
    ExploreScreen: undefined;
    PubScreen: undefined;
    TabScreen: undefined;
}

export default function App() {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <BasketContextProvider>
            <MapContextProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="LoginScreen" component={Login} options={{headerShown: false}}/>
                        <Stack.Screen name="DrawerScreen" component={CustomDrawer} options={{headerShown: false}}/>
                        <Stack.Screen name="MapScreen" component={Map} options={{headerShown: false}}/>
                        <Stack.Screen name="ExploreScreen" component={Explore} options={{headerShown: false}}/>
                        <Stack.Screen name="PubScreen" component={Pub} options={{headerShown: false}}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </MapContextProvider>
        </BasketContextProvider>
    );
}


