
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import MainTabScreen from '../MainTabScreen/MainTabScreen';
import ProfileScreen from '../../ProfileScreen/ProfileScreen';
import ExploreScreen from '../../ExploreScreen/ExploreScreen';
import { store } from '../../Redux/Reducer/Store';
import DrawerContent from '../../Route/DrawerContent/DrawerContent';
import { navigationRef } from '../RootNavigation/RootNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../../shared/Register';
import Login from '../../shared/Login';
import CompletedToDoScreen from '../../CompletedToDoScreen/CompletedToDoScreen';
import PendingToDoScreen from '../../PendingToDoScreen/PendingToDoScreen';
const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();


export default function MainStackScreen() {
    const auth = useSelector((state) => state.auth);
    return (
        <>
            {
                (!auth.username && !auth.email)
                    ?
                    <NavigationContainer ref={navigationRef}>
                        <RootStack.Navigator headerMode="none">
                            <RootStack.Screen name="Login" component={Login}></RootStack.Screen>
                            <RootStack.Screen name="Register" component={Register}></RootStack.Screen>
                        </RootStack.Navigator>
                    </NavigationContainer>
                    :
                    <NavigationContainer ref={navigationRef}>
                        <Drawer.Navigator drawerContent={props => <DrawerContent{...props} />}>
                            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                            <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
                            <Drawer.Screen name="ExploreScreen" component={ExploreScreen} />
                            <Drawer.Screen name="CompletedScreen" component={CompletedToDoScreen} />
                            <Drawer.Screen name="PendingScreen" component={PendingToDoScreen} />
                            <Drawer.Screen name="Login" component={Login} />
                            <Drawer.Screen name="MainStackScreen" component={MainStackScreen} />
                        </Drawer.Navigator>
                    </NavigationContainer>
            }
        </>
    );
}

