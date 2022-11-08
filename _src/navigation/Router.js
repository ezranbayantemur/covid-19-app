import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaView, Button, View } from 'react-native';
import { Main, Detail, WorldMap } from '../pages'

import SegmentedControlIOS from '@react-native-community/segmented-control';
import styles from '../utils/styles';
import Context from '../context/components/store';

const pages = ['Main', 'WorldMap']

const Stack = createStackNavigator();

export default function Router() {
    const { state } = useContext(Context)
    let navigatior = null
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={{ padding: 5 }}>
                <SegmentedControlIOS
                    values={[state.language.analyze, state.language.world]}
                    selectedIndex={0}
                    onChange={event => navigatior.navigate(pages[event.nativeEvent.selectedSegmentIndex])}
                    tintColor='rgb(242, 63, 52)'
                    backgroundColor={styles.segmentColor}
                    textColor="white"
                />
            </View>

            <NavigationContainer ref={ref => navigatior = ref}>
                <Stack.Navigator
                >
                    <Stack.Screen
                        name="Main"
                        component={Main}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Detail"
                        component={Detail}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="WorldMap"
                        component={WorldMap}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaView>
    );
}