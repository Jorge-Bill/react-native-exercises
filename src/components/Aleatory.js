import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const MinMax = () => {
  const [value, setValue] = useState(0);

  const generate = () => {
    setValue(Math.floor(Math.random() * (99 - 1)) + 1);

    setTimeout(() => {
      resetValue();
    }, 2000);
  };

  const resetValue = () => {
    setValue(0);
  };

  return (
    <View style={style.wrapper}>
      <Text style={style.title}>
        Toque no botão para gerar um valor aleratório
      </Text>
      <TouchableOpacity style={style.button} onPress={generate}>
        <Text style={style.titleButton}>Gerar</Text>
      </TouchableOpacity>
      <Text style={style.text}>{value}</Text>
      <Text style={style.footNotes}>Desenvolvido por Jorge Mendes</Text>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 25,
    marginBottom: 40,
    fontWeight: '600',
    color: '#001C43',
    textAlign: 'center',
  },
  text: {
    fontSize: 80,
    marginTop: 50,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#001C43',
    alignItems: 'center',
    padding: 50,
    borderRadius: 100,
    marginTop: 10,
    marginRight: 110,
    marginLeft: 110,
  },
  titleButton: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  footNotes: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default MinMax;
