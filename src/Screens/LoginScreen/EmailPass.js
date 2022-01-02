import React, {useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Text} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFe from 'react-native-vector-icons/Feather';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import MyTextInput from '../../Components/MyTextInput';
import RememberPass from '../../Components/RememberPass';

const EmailPass = () => {
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (val.length === 0) {
      setEmailValidError('');
    } else if (reg.test(val) === false) {
      setEmailValidError('E-mail duzgun qeyd edilmeyib');
    } else if (reg.test(val) === true) {
      setEmailValidError('');
    }
  };

  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.IconInputVIew}>
          <IconAnt name="mail" size={20} style={styles.Icon} />
          <MyTextInput
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={value => {
              setEmail(value);
              handleValidEmail(value);
            }}
          />
          {emailValidError ? <Text>{emailValidError}</Text> : null}
        </View>

        <View style={styles.IconInputVIew}>
          <IconFe name="lock" size={20} style={styles.Icon} />
          <MyTextInput
            placeholder="Password"
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
      </KeyboardAvoidingView>
      <RememberPass />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
  },
  Icon: {position: 'absolute', top: 10},
  IconShowHide: {
    position: 'absolute',
    top: 10,
    right: 0,
  },
  IconInputVIew: {justifyContent: 'center'},
});

export default EmailPass;
