import React from 'react';
import { 
Text,
  StyleSheet,
  View,
} from 'react-native';

const MainScreen = () => {
  return <View>
    <Text style={styles.textStyle}>This is the components screns main"</Text>
    </View>;
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
})

export default MainScreen;
