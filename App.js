import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  const [outputText, setOutputText ] = useState('Olá');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title = "Clique Aqui" onPress={() => setOutputText('Tudo bom? ')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDA0DD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
