import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFe from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';

const EmailPass = () => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View style={{justifyContent: 'center'}}>
          <IconAnt
            name="mail"
            size={20}
            style={{position: 'absolute', top: 10}}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email Address"
            keyboardType="email-address"
          />
        </View>

        <View style={{justifyContent: 'center'}}>
          <IconFe
            name="lock"
            size={20}
            style={{position: 'absolute', top: 10}}
          />
          <TextInput style={styles.textInput} placeholder="Password" />
        </View>
      </KeyboardAvoidingView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            tintColors={{true: '#d4d0cf', false: '#d4d0cf'}}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={{color: '#d4d0cf', fontWeight: '700'}}>
            Remember password
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={{color: '#4fa9dd', fontWeight: '700'}}>
            Forget Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
  },
  textInput: {
    height: 40,
    borderColor: '#d6d6d6',
    marginBottom: 35,
    paddingLeft: 25,
    borderBottomWidth: 1,
  },
});

export default EmailPass;
