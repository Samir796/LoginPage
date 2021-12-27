import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import BtnSgnUp from './BtnSignUp';
import ConfirmPass from './ConfirmPass';
import Register from './Register';

const RegisterScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Register />
      <View style={styles.LogReg}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.touchStyle}
            onPress={() => navigation.navigate('LogScreen')}>
            <Text style={{fontSize: 18}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchStyle}
            onPress={() => navigation.navigate('Register')}>
            <Text
              style={{color: '#7aabcc', fontSize: 18, borderBottomWidth: 1}}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ConfirmPass />
      <BtnSgnUp />
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    marginTop: 35,
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
export default RegisterScreen;
