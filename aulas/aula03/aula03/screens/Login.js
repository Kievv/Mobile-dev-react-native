import { View, StyleSheet, Text, TextInput, Button } from "react-native";
const Login = () => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.textSize}>Login</Text>
      <TextInput
        style={estilos.input}
        placeholder="Email"
        keyboardType="email-address"
      ></TextInput>
      <TextInput
        style={estilos.input}
        placeholder="Senha"
        secureTextEntry={true}
      ></TextInput>
      <Button title="Entrar" color={"blue"} style={estilos.botao} />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    paddingHorizontal: 16,
    justifyContent: "center",

    width: "auto",
  },
  textSize: {
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    lineHeight: 48,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    marginBottom: 16,
  },
});

export default Login;
