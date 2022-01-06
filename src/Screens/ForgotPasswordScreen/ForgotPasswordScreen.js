import React from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import MyTextInput from '../../Components/MyTextInput';
import IconFo from 'react-native-vector-icons/Foundation';
import Btn from '../../Components/Button';

const ForgotPassword = () => {
  const shouldSetResponse = () => true;
  const onRelease = () => Keyboard.dismiss();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      onResponderRelease={onRelease}
      onStartShouldSetResponder={shouldSetResponse}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Forgot Password</Text>
      </View>
      <View style={styles.inputContainer}>
        <IconFo name="telephone" size={20} style={styles.Icon} />
        <MyTextInput
          placeholder="Your number"
          keyboardType="phone-pad"
          style={styles.input}
        />
        <Btn name="Send" />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  Icon: {
    position: 'absolute',
    top: 10,
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 21,
    fontWeight: '700',
  },
});
export default ForgotPassword;
