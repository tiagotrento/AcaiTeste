import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { TabBar } from 'react-native-tab-view';


export default props => {
    return (
        <View style={{ backgroundColor: 'purple' }} >
        <StatusBar backgroundColor='purple' />
            <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ color: 'white', fontSize: 20 }} >Inicio</Text>
            </View>
            <TabBar {...props} style={{ backgroundColor:'purple' }} />
        </View>
    );
}