import React from 'react';
import {SafeAreaView} from 'react-native';
import style from './components/style';

// import First from './components/First';
// import CompDefault, {Comp1, Comp2} from './components/Mult';
// import MinMax from './components/MinMax';
import Aleatory from './components/Aleatory';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <Aleatory />
      {/* <MinMax />
      <CompDefault />
      <Comp1 />
      <Comp2 />
      <First /> */}
    </SafeAreaView>
  );
};

export default App;
