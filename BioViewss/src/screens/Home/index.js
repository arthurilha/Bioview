import React, { useState } from 'react'

import { StatusBar } from 'expo-status-bar'
import { Entypo } from '@expo/vector-icons'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  
  
  //animar o header
  Animated,
  //Para o botão
  TouchableOpacity
} from 'react-native'

export default function App() {

  ;
  const [scrollY, setScrollY] = useState(new Animated.Value(0)) //para fazer a animação do header sumer e aparecer

  return (
    <SafeAreaView style={styles.background}> 
      
      <View >
        {/* Status Bar */}
        <StatusBar style="light" backgroundColor="#97dc26" translucesnt={false} />

        {/* Header */}
        <Animated.View
          style={[
            styles.Header,
            {
              height: scrollY.interpolate({
                //Sobre a logo
                inputRange: [10, 160, 170], //???
                outputRange: [125,0, 0], //tamanho,?,?
                
              }),
              
            }
          ]}
        >
          <View>
            <Image source={require('./img/bioview.png')} style={styles.Bio} />
          </View>
        </Animated.View>

        {/* Proximos itens*/}
        <ScrollView
        
          scrollEventThrottle={16} //limita os pixels envolvido, para diminuir o lag gerado
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
        >
           
           
       
          
           
           <Text/>
          <TouchableOpacity style={styles.Box} activeOpacity={0.5}>
            <Image
              source={require('./img/arvore.png')}
              style={styles.ImagemBotao}
            />
            <View style={styles.SeparadorBotao} />
            <Text style={styles.TextoBotao}>Árvores</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Box} activeOpacity={0.5}>
            <Image
              source={require('./img/planta.png')}
              style={styles.ImagemBotao}
            />
            <View style={styles.SeparadorBotao} />
            <Text style={styles.TextoBotao}>Plantas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Box} activeOpacity={0.5}>
            <Image
              source={require('./img/animais.png')}
              style={styles.ImagemBotao}
            />
            <View style={styles.SeparadorBotao} />
            <Text style={styles.TextoBotao}>Animais</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Box} activeOpacity={0.5}>
            <Image
              source={require('./img/monumentos.png')}
              style={styles.ImagemBotao}
            />
            <View style={styles.SeparadorBotao} />
            <Text style={styles.TextoBotao}>Outros</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.um} activeOpacity={0.5}>
            
          </TouchableOpacity>
          
          
          
          
          
        </ScrollView>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Header: {
    paddingTop: 25,
    backgroundColor: '#fff',
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'space-around', //quando é somente uma imagme, fica centralizado corretamente

    borderBottomWidth: 2,
    borderBottomColor: 'transparent'
  },
  Box: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
    backgroundColor: '#F6F8F5',
    marginTop:30,
    
    borderRadius: 20,
    justifyContent: 'space-around'
  },
  ImagemBotao: {
    padding:10,
    margin: 5,
    height: 70,
    width: 70
  },
  SeparadorBotao: {
    width: 1,
    height: 1
  },
  TextoBotao: {
    color: '#97dc26',
    marginBottom: 4,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold'
    
  },
  Bio: {
   
    width: 370,
    height:60,
    marginTop:60
  },
 
  background: {
    flex:0,
    resizeMode: "cover",
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  um :{
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
    backgroundColor: '#fff',
    marginTop:30,
    
    borderRadius: 20,
    justifyContent: 'space-around'
    
  }
})
