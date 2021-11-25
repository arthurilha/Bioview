import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import TreeButton from './components/TreeButton'


import HomeScreen from './screens/Home';
import MapaScreen from './screens/Mapa';
import QrcodeScreen from './screens/Qrcode';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: FontAwesome5,
        name: 'tree',
    },
    Mapa: {
        lib: Feather,
        name: 'map-pin',
    },
    QrCode: {
        lib: MaterialCommunityIcons,
        name: 'qrcode-scan',
    },
};

export default function Navigation(){
    return(
        <Tab.Navigator
       
          screenOptions={({ route, navigation }) => ({ 
              tabBarIcon: ({ color, size, focused }) => {
                  if(route.name == 'Home' ) {
                      return (
                           <TreeButton 
                           onPress={() => navigation.navigate('Home')}
                           focused={focused}
                           />
                      );
                  }
               const { lib: Icon, name } = icons[route.name];
               return <Icon name={name} size={size} color={color} />;
              },
          })}
         tabBarOptions={{
             style: {
                 borderTopColor: 'rgba(255, 255, 255, 0.2)'

             },
             activeTintColor: '#2CB039',
             inactiveTintColor: '#9A9A9D',

         }}
        
        
        
        
        
        >
            <Tab.Screen name="QrCode" component={QrcodeScreen}
          options={{
            title: "QrCode"
        }}
         />
            
         
          <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            title: ""
        }}
        />
           <Tab.Screen name="Mapa" component={MapaScreen} 
          options={{
              title: "Mapa"
          }}
        />
        </Tab.Navigator>


    );
  

}
