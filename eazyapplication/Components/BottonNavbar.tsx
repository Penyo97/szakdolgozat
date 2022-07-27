import React from 'react';
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import {Icon} from "@rneui/base";
import {COLORS} from "../AppAssets";

const tabs = [
    {
        name: 'Home',
        activeIcon: <Icon name="star" color={COLORS.orange} type="font-awesome-5" size={25} />,
        inactiveIcon: <Icon name="star" color={COLORS.orange} type="font-awesome-5" size={25} />
    },
    {
        name: 'map',
        activeIcon: <Icon name="map" color={COLORS.orange} type="font-awesome-5" size={25} />,
        inactiveIcon: <Icon name="map" color={COLORS.orange} type="font-awesome-5" size={25} />
    },
    {
        name: 'search',
        activeIcon: <Icon name="search" color={COLORS.orange} type="font-awesome-5" size={25} />,
        inactiveIcon: <Icon name="search" color={COLORS.orange} type="font-awesome-5" size={25} />
    },
    {
        name: 'drink',
        activeIcon: <Icon name="beer-outline" color={COLORS.orange} type="ionicon" size={25} />,
        inactiveIcon: <Icon name="beer-outline" color={COLORS.orange} type="ionicon" size={25} />
    },
    {
        name: 'Profile',
        activeIcon: <Icon name="user" color={COLORS.orange} type="font-awesome-5" size={25} />,
        inactiveIcon: <Icon name="user" color={COLORS.orange} type="font-awesome-5" size={25} />
    },

];
const BottonNavbar = () => {
    return (
        <Tabbar
            tabs={tabs}
            tabBarContainerBackground='#F0F9F3'
            tabBarBackground={COLORS.orange}
            activeTabBackground='#F0F9F3'
            labelStyle={{ color: COLORS.orange, fontWeight: '600', fontSize: 13 }}
            onTabChange={(name) => console.log(name.name)}
            transitionSpeed={0.5}
        />
    );
};

export default BottonNavbar;