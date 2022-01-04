import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Keyboard,
} from 'react-native';
import LogRegHeadre from '../../Components/LogRegHeadre';
import EmailPass from './EmailPass';

const LogScreen = ({navigation}) => {
  const shouldSetResponse = () => true;
  const onRelease = () => Keyboard.dismiss();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      onResponderRelease={onRelease}
      onStartShouldSetResponder={shouldSetResponse}>
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
