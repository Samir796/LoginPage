import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const MyTextInput = props => {
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        autoComplete={props.autoComplete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: '#d6d6d6',
    marginBottom: 35,
    paddingLeft: 25,
    borderBottomWidth: 1,
  },
});
export default MyTextInput;
