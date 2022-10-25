import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';

const MinMax = () => {
  const [values, setValues] = useState({
    minimum: 0,
    maximum: 0,
  });

  const compare = () => {
    if (values.minimum === 0 || values.maximum === 0) {
      Alert.alert('Insira valores para jogar');
    } else if (values.minimum === values.maximum) {
      Alert.alert(
        `Os valores ${values.minimum} e ${values.maximum} são iguais`,
      );
    } else {
      Alert.alert(
        `O maior número é ${Math.max(values.minimum, values.maximum)}`,
      );
    }
    resetValues();
  };

  const resetValues = () => {
    setValues({
      minimum: 0,
      maximum: 0,
    });
  };

  return (
    <View style={style.wrapper}>
      <Text style={style.title}>Qual o maior valor?</Text>
      <Text style={style.text}>Digite o primeiro valor:</Text>
      <TextInput
        style={style.input}
        onChangeText={value =>
          setValues({
            ...values,
            minimum: value,
          })
        }
        value={values.minimum}
        placeholder="Primeiro valor"
        keyboardType="numeric"
      />

      <Text style={style.text}>Digite o segundo valor:</Text>
      <TextInput
        style={style.input}
        onChangeText={value =>
          setValues({
            ...values,
            maximum: value,
          })
        }
        value={values.maximum}
        placeholder="Segundo valor"
        keyboardType="numeric"
      />
      <TouchableOpacity style={style.button} onPress={() => compare()}>
        <Text style={style.titleButton}>descobrir</Text>
      </TouchableOpacity>
      <Text style={style.footNotes}>Desenvolvido por Jorge Mendes</Text>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    padding: 4,
  },
  title: {
    fontSize: 40,
    marginBottom: 40,
    fontWeight: '600',
    color: '#001C43',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#001C43',
    alignItems: 'center',
    padding: 20,
    borderRadius: 4,
    marginTop: 10,
  },
  titleButton: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  footNotes: {
    fontSize: 10,
    marginTop: 70,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default MinMax;
