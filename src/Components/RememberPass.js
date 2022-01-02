import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const RememberPass = () => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  return (
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
      <TouchableOpacity>
        <Text style={styles.text}>Forget Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  CheckView: {flexDirection: 'row', alignItems: 'center'},
  ContainerCheckView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {color: '#4e9ec3'},
});

export default RememberPass;
