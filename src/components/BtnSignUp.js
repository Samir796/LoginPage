import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const BtnSgnUp = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          width: '80%',
          backgroundColor: '#0486d1',
          borderRadius: 5,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 21, color: '#fff', fontWeight: '300'}}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default BtnSgnUp;
