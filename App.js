import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { EngineScreen } from './src/EngineView';
import { useEngine, EngineView} from '@babylonjs/react-native';

export default function App() {

  const engine = useEngine();

  return (
    <View style={styles.container}>
      <Text>AR/XR React Native</Text>
      {/* <EngineScreen style={{flex: 1, backgroundColor:'red'}}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
