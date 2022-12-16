import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: "column-reverse"}}>
      <View style={{flex: 1, backgroundColor: "#2475B0"}}></View>
      <View style={{flex: 2, backgroundColor: "#10A881"}}></View>
      <View style={{flex: 3, backgroundColor: "#E74292"}}></View>
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
