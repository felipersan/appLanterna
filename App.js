import React, {useState, useEffect} from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

export default function App() {
  const [ligth, setLigth] = useState(false);

  useEffect(() => {
    Torch.switchState(ligth);
    console.log('mudou');
  }, [ligth]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setLigth(!ligth);
    });
  }, []);

  return (
    <View style={ligth ? styles.containerLight : styles.containerBlack}>
      <TouchableOpacity
        onPress={() => {
          setLigth(!ligth);
        }}>
        <Image
          style={ligth ? styles.imageOn : styles.imageOff}
          source={
            ligth
              ? require('./src/assets/eco-light.png')
              : require('./src/assets/eco-light-off.png')
          }
        />
        <Image
          style={styles.logo}
          source={
            ligth
              ? require('./src/assets/logo-dio.png')
              : require('./src/assets/logo-dio-white.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBlack: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageOn: {
    resizeMode: 'contain',
    width: 250,
    height: 250,
  },
  imageOff: {
    resizeMode: 'contain',
    tintColor: '#fff',
    width: 250,
    height: 250,
  },
  logo: {
    resizeMode: 'contain',
    marginTop: 30,
    width: 250,
    height: 100,
  },
});
