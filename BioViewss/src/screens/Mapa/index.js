import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';




const image = require('./Map.png');

export default function Home(){
    return (
    
 <ImageBackground source={ image } style={style.background}>
   <View style={style.viewback}>    
    
  </View>
 </ImageBackground>

   
    );

}







const style = StyleSheet.create({              
        viewback:{

        flex: 1,
        flexDirection: "column",
        marginBottom: 1

    
    },
    
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        
        
    
    },
    
    
    
    });
    

