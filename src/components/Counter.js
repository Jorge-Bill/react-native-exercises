import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);

  return (
    <View style={style.wrapper}>
      <Text style={style.title}>Vamos somar ou subtrair?</Text>
      <TouchableOpacity style={style.button} onPress={increment}>
        <Text style={style.titleButton}>+</Text>
      </TouchableOpacity>
      <Text style={style.count}>{count}</Text>
      <TouchableOpacity style={style.button} onPress={decrement}>
        <Text style={style.titleButton}>-</Text>
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
    fontWeight: "600",
    color: "#001C43",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 40,
  },
  count: {
    fontSize: 40,
    fontWeight: "600",
    color: "#001C43",
    textTransform: "uppercase",
    textAlign: "center",
    margin: 25,
  },
  button: {
    backgroundColor: "#001C43",
    alignItems: "center",
    padding: 20,
    borderRadius: 4,
    borderRadius: 100,
    marginRight: 170,
    marginLeft: 165,
  },
  titleButton: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
  },
  footNotes: {
    fontSize: 10,
    marginTop: 70,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default Counter;
