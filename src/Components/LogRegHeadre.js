import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LogRegHeadre = props => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          paddingVertical: 20,
          fontSize: 24,
          fontWeight: '900',
          color: 'black',
        }}>
        {props.text}
      </Text>
      <View style={{width: '60%'}}>
        <Text style={styles.textOne}>
          By signing in you are agreeing our
          <Text style={styles.textTwo}>Term and privacy policy</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textOne: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#8d898a',
  },
  textTwo: {
    lineHeight: 25,
    color: '#4e9ec3',
  },
});

export default LogRegHeadre;
