import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFe from 'react-native-vector-icons/Feather';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import Btn from '../../Components/Button';
import MyTextInput from '../../Components/MyTextInput';

import Modal from 'react-native-modal';

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
const ConfirmPass = () => {
  const [hidePass, setHidePass] = useState(true);
  const [hidePassConf, setHidePassConf] = useState(true);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const {password, confirmPassword, email} = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('incorrect email, password', setError);
    if (!isValidEmail(email)) return updateError('invalid email!', setError);
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
          <IconAnt name="mail" size={20} style={styles.Icon} />
          <MyTextInput
            placeholder="Email"
            value={email}
            onChangeText={value => handleOnChangeText(value, 'email')}
          />
        </View>

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
        </View>
      </KeyboardAvoidingView>
      <Btn
        name="Sign Up"
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 220,
    marginHorizontal: 60,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
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

export default ConfirmPass;
