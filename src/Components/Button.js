import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

const Btn = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          width: '80%',
          backgroundColor: '#0486d1',
          borderRadius: 5,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 21, color: '#fff', fontWeight: '300'}}>
          {props.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Btn;
