import React from 'react';
import {View, StyleSheet, Dimensions} from "react-native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem, DrawerItemList,
} from '@react-navigation/drawer';
import {COLORS} from "../AppAssets";
import MyProfile from "../Screens/MyProfile";
import Map from "../Screens/Map";
import Explore from "../Screens/Explore";
import TabsNavigation from "./TabsNavigation";


export type DrawerStackParamList = {
    MapScreen: undefined;
    ExploreScreen: undefined;
    MyProfileScreen: undefined;
    TabNavigator: undefined;
}

const Drawer = createDrawerNavigator<DrawerStackParamList>();
const CustomDrawerContent = (props: any) => {
    return (
        <View style={{flex: 0.6}}>
            <DrawerContentScrollView {...props} contentContainerStyle={style.container}>
                <DrawerItemList {...props} />
                <DrawerItem label="exit" onPress={() => {
                    props.navigation.closeDrawer()
                }}/>

            </DrawerContentScrollView>
        </View>
    )
}

const CustomDrawer = () => {

    return (
        <Drawer.Navigator screenOptions={{
            drawerStyle: style.drawerContainer,
            drawerInactiveTintColor: "#fff",
            drawerActiveTintColor: "#fff"
        }}
                          drawerContent={(props) => {
                              return (
                                  <CustomDrawerContent {...props} />
                              )
                          }}>
            <Drawer.Screen name="TabNavigator" component={TabsNavigation}
                           options={{headerShown: false, drawerItemStyle: {height: 0}}}/>
            <Drawer.Screen name="MapScreen" component={Map}
                           options={{headerShown: false, drawerItemStyle: {height: 0}}}/>
            <Drawer.Screen name="ExploreScreen" component={Explore}
                           options={{headerShown: false, drawerItemStyle: {height: 0}}}/>
            <Drawer.Screen name="MyProfileScreen" component={MyProfile}
                           options={{headerShown: false, drawerLabel: "Saját Profilom"}}/>
        </Drawer.Navigator>
    );
};
const style = StyleSheet.create({
    container: {
        backgroundColor: COLORS.orange,

    },
    drawerContainer: {
        width: Dimensions.get("screen").width / 1.5,
        backgroundColor: COLORS.orange
    }
})
export default CustomDrawer;