import React from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect } from 'react';
import { View } from 'react-native';
import {css} from '../css/Css';

export default function Qrcode(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [displayQR, setDisplayQR] = useState('flex');

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

      async function handleBarCodeScanned({ type, data }){
        setScanned(true);
        setScanned(true);
        setDisplayQR('none');
        setDisplayForm('flex');
        setCode(data);
 
      };

      return (
        <View>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : value=>handleBarCodeScanned(value)}
        style={css.code(displayQR)}
        />
       </View>
      );
}
