import {NavigationContainer} from "@react-navigation/native";
import Login from "./Screens/Login";

import {createNativeStackNavigator} from "react-native-screens/native-stack";



export type RootStackParamList = {
  LoginScreen:undefined;
}

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={Login} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


