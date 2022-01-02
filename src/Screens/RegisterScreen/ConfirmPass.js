import React, {useState} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import IconFe from 'react-native-vector-icons/Feather';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import Btn from '../../Components/Button';
import MyTextInput from '../../Components/MyTextInput';
import RememberPass from '../../Components/RememberPass';

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('');
  }, 2500);
};
const ConfirmPass = () => {
  const [hidePass, setHidePass] = useState(true);
  const [hidePassConf, setHidePassConf] = useState(true);

  const [userInfo, setUserInfo] = useState({password: '', confirmPassword: ''});
  const [error, setError] = useState('');
  const {password, confirmPassword} = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };

  const isValidForm = () => {
    if (password !== confirmPassword)
      return updateError('Password does not match!', setError);
  };
  const submitForm = () => {
    if (isValidForm()) {
      console.log(userInfo);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View style={{justifyContent: 'center'}}>
          <IconFe name="lock" size={20} style={styles.Icon} />
          <MyTextInput
            placeholder="Password"
            onChangeText={value => handleOnChangeText(value, 'password')}
            value={password}
            autoCompleteType="password"
            secureTextEntry={hidePass ? true : false}
          />
          <IconFA
            name={hidePass ? 'eye-slash' : 'eye'}
            size={20}
            onPress={() => setHidePass(!hidePass)}
            style={styles.IconShowHide}
          />
        </View>

        <View style={{justifyContent: 'center'}}>
          <IconFe name="lock" size={20} style={styles.Icon} />
          <MyTextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={value => handleOnChangeText(value, 'confirmPassword')}
            autoCompleteType="password"
            secureTextEntry={hidePassConf ? true : false}
          />
          <IconFA
            name={hidePassConf ? 'eye-slash' : 'eye'}
            size={20}
            onPress={() => setHidePassConf(!hidePassConf)}
            style={styles.IconShowHide}
          />
          {error ? <Text style={styles.ErrorText}>{error}</Text> : null}
        </View>
      </KeyboardAvoidingView>
      <RememberPass />
      <Btn name="Sign Up" onPress={submitForm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
  },
  textInput: {
    height: 40,
    borderColor: '#d6d6d6',
    marginBottom: 35,
    paddingLeft: 25,
    borderBottomWidth: 1,
  },
  Icon: {
    position: 'absolute',
    top: 10,
  },
  IconShowHide: {
    position: 'absolute',
    top: 10,
    right: 0,
  },
  ErrorText: {color: 'red', fontSize: 18, alignItems: 'center'},
});

export default ConfirmPass;
