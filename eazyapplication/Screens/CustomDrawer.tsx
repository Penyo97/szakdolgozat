import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from "react-native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Map from "./Map";
import {COLORS} from "../AppAssets";
import Animated from "react-native-reanimated";
import Explore from "./Explore";


const Drawer = createDrawerNavigator();
const  CustomDrawerContent = (props:any) => {

    return(
        <View style={{flex:0.6}}>
        <DrawerContentScrollView {...props} contentContainerStyle={style.container}>
            <DrawerItemList {...props} />
            <DrawerItem label="exit" onPress={()=> {
                props.navigation.closeDrawer()}}/>

        </DrawerContentScrollView>
        </View>
    )
}




const CustomDrawer = () => {

    return (
            <Drawer.Navigator screenOptions={{drawerStyle:style.drawerContainer,drawerInactiveTintColor:"#fff",drawerActiveTintColor:"#fff"}} drawerContent={(props) => {
                return (
                    <CustomDrawerContent {...props} />
                )
            }} >
                <Drawer.Screen name="Map" component={Map} options={{headerShown:false,}}/>
                <Drawer.Screen name="Explore" component={Explore} options={{headerShown:false}}/>
            </Drawer.Navigator>
    );
};
const style = StyleSheet.create({
    container:{
        backgroundColor:COLORS.orange,

    },
    drawerContainer:{
        width:Dimensions.get("screen").width/1.5,
        backgroundColor:COLORS.orange
        }
})
export default CustomDrawer;