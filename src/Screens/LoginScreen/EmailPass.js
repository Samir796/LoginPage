import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import Modal from 'react-native-modal';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFe from 'react-native-vector-icons/Feather';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import MyTextInput from '../../Components/MyTextInput';
import Btn from '../../Components/Button';
import CheckBox from '@react-native-community/checkbox';

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('');
  }, 8000);
};

const isValidObjField = obj => {
  return Object.values(obj).every(value => value.trim());
};

const isValidEmail = value => {
  const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return regx.test(value);
};

const EmailPass = props => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const {password, email} = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };

  const isValidForm = () => {
    if (!isValidEmail(email) & (!password.trim() || password.length < 8))
      return updateError(
        'email incorrect' + ' ' + ' ' + 'password incorrect',
        setError,
      );
    if (!isValidObjField(userInfo))
      return updateError('incorrect email, password', setError);
    if (!isValidEmail(email)) return updateError('email incorrect', setError);
    if (!password.trim() || password.length < 8)
      return updateError('password incorrect', setError);
  };

  const submitForm = () => {
    if (isValidForm()) {
      console.log(userInfo);
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
            onChangeText={value => handleOnChangeText(value, 'email')}
          />
        </View>

        <View style={styles.IconInputVIew}>
          <IconFe name="lock" size={20} style={styles.Icon} />
          <MyTextInput
            onChangeText={value => handleOnChangeText(value, 'password')}
            value={password}
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
      <View style={styles.ContainerCheckView}>
        <View style={styles.CheckView}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            tintColors={{true: '#d4d0cf', false: '#d4d0cf'}}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text>Remember password</Text>
        </View>
        <TouchableOpacity onPress={props.onPress}>
          <Text style={styles.text}>Forget Password</Text>
        </TouchableOpacity>
      </View>

      <Btn
        name="Login"
        onPress={() => {
          submitForm();
          toggleModal();
        }}
      />
      <View>
        <Modal isVisible={isModalVisible} style={styles.modalContainer}>
          <SafeAreaView>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.termsHeadText}>Error message</Text>
              {error ? <Text style={styles.ErrorText}>{error}</Text> : null}
              <TouchableOpacity onPress={toggleModal} style={styles.ButtonHide}>
                <Text style={styles.textColorBtn}>I Agree</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>
      </View>
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
  Error: {
    color: 'red',
  },
  ErrorText: {color: 'red', fontSize: 18, alignItems: 'center'},
  CheckView: {flexDirection: 'row', alignItems: 'center'},
  ContainerCheckView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {color: '#4e9ec3'},

  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 220,
    marginHorizontal: 60,
    padding: 30,
    alignItems: 'center',
  },
  termsHeadText: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '700',
    color: 'dodgerblue',
  },
  ButtonHide: {
    width: '100%',
    height: 40,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  textColorBtn: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default EmailPass;
