import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ModalTester from './ModalScreen';

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
        <ModalTester />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default LogRegHeadre;
