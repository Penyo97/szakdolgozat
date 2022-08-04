import React from 'react';
import {View} from "react-native";
import { createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Map from "./Map";

const Drawer = createDrawerNavigator();


const  CustomDrawerContent = (props:any) => {
    return(
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Help"
                onPress={() => alert('asdasd')}
            />
        </DrawerContentScrollView>
    )
}

const CustomDrawer = () => {

    return (
            <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="Map" component={Map} options={{headerShown:false}}/>
            </Drawer.Navigator>
    );
};

export default CustomDrawer;