import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Btn from '../../Components/Button';
import LogRegHeadre from '../../Components/LogRegHeadre';
import EmailPass from './EmailPass';

const LogScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <LogRegHeadre text="Login" />
      <View style={styles.LogReg}>
        <View style={styles.TouchContainer}>
          <TouchableOpacity
            style={styles.touchStyle}
            onPress={() => navigation.navigate('LogScreen')}>
            <Text style={styles.TextLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchStyle}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.TextRegister}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <EmailPass />
      <Btn name="Login" />
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchStyle: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  LogReg: {
    alignItems: 'center',
    marginVertical: 25,
  },
  TouchContainer: {
    flexDirection: 'row',
  },
  TextLogin: {color: '#7aabcc', fontSize: 18, borderBottomWidth: 1},
  TextRegister: {fontSize: 18},
});
export default LogScreen;
