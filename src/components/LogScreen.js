import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Btn from './Button';
import EmailPass from './EmailPass';
import Login from './Login';

const LogScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Login />
      <View style={styles.LogReg}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.touchStyle}
            onPress={() => navigation.navigate('LogScreen')}>
            <Text
              style={{color: '#7aabcc', fontSize: 18, borderBottomWidth: 1}}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchStyle}
            onPress={() => navigation.navigate('Register')}>
            <Text style={{fontSize: 18}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <EmailPass />
      <Btn />
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.7,
  },
  touchStyle: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  LogReg: {
    flex: 0.5,

    alignItems: 'center',
  },
});
export default LogScreen;
