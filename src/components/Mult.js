import React from 'react';
import {Text} from 'react-native';
import style from './style';

function CompDefault() {
  return <Text style={style.fontBigger}>Component #Oficial</Text>;
}

function Comp1() {
  return <Text style={style.fontBigger}>Component 01</Text>;
}

function Comp2() {
  return <Text style={style.fontBigger}>Component 02</Text>;
}

export {Comp1, Comp2};

export default CompDefault;
