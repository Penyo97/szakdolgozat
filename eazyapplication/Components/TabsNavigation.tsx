import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Map from "../Screens/Map";
import Explore from "../Screens/Explore";
import {Icon} from "@rneui/base";
import {COLORS} from "../AppAssets";
import {Text} from "react-native";
import Pub from "../Screens/Pub";
import Tray from "../Screens/Tray";

export type TabStackParamList = {
    MapScreen: undefined;
    ExploreScreen: undefined;
    PubScreen: undefined;
    TrayScreen: undefined;
}

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabsNavigation = () => {


        return (
        <Tab.Navigator screenOptions={{tabBarHideOnKeyboard:true}}>
            <Tab.Screen name="ExploreScreen" component={Explore} options={{headerShown:false,
                tabBarIcon: ({focused}) => (  <Icon name="star" color={focused ? COLORS.red: "grey"} type="font-awesome-5" size={25} />
                ),tabBarLabel: ({focused}) => ( focused && <Text>Felfedezés</Text>)
            }} />
            <Tab.Screen name="MapScreen" component={Map} options={{headerShown:false,
                tabBarIcon: ({focused}) => (  <Icon name="map" color={focused ? COLORS.red: "grey"} type="font-awesome-5" size={25} />
                ),tabBarLabel: ({focused}) => ( focused && <Text>Térkép</Text>)}}/>
            <Tab.Screen name="TrayScreen" component={Tray} options={{headerShown:false,
                tabBarIcon: ({focused}) => (  <Icon name="fill" color={focused ? COLORS.red: "grey"} type="font-awesome-5" size={25} />
                ),tabBarLabel: ({focused}) => ( focused && <Text>Tálca</Text>)}}/>
            <Tab.Screen name="PubScreen" component={Pub} options={{headerShown:false,tabBarButton:()=>null}} />
        </Tab.Navigator>
    );
};



export default TabsNavigation;