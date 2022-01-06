import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {SafeAreaView} from 'react-native-safe-area-context';
import text from './text';

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.textOne}>
        By signing in you are agreeing our
        <Text title="Show modal" onPress={toggleModal} style={styles.textTwo}>
          {' '}
          Term of use
        </Text>
      </Text>

      <Modal isVisible={isModalVisible} style={styles.modalContainer}>
        <SafeAreaView>
          <ScrollView>
            <View style={{flex: 1}}>
              <Text style={styles.termsHeadText}>AGREEMENT TO TERMS</Text>
              <Text>{text}</Text>
              <TouchableOpacity onPress={toggleModal} style={styles.ButtonHide}>
                <Text style={styles.textColorBtn}>I Agree</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 20,
    padding: 30,
    alignItems: 'center',
  },
  textOne: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#8d898a',
  },
  textTwo: {
    lineHeight: 26,
    color: '#4e9ec3',
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
  termsHeadText: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '700',
    color: 'dodgerblue',
  },
});

export default ModalTester;
