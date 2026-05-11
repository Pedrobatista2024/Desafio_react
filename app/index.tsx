import { ImageBackground, StyleSheet, Text, View, TextInput } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/fundol.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.container}>

        <View style={styles.form}>
          <Text style={styles.title}>Área de Acesso</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor={"#ccc"}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor={"#ccc"}
            secureTextEntry={true}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 20,
  },

  form: {
    width:"100%",
    maxWidth:400,
    alignItems:"center",
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    width: "100%", // Ocupa toda a largura disponível (respeitando o padding do container)
    height: 50, // Altura confortável para o dedo tocar no celular
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Fundo branco bem transparente (estilo moderno)
    borderRadius: 8, // Arredonda os cantos
    paddingHorizontal: 15, // Dá espaço para o texto não começar colado na borda esquerda
    color: "#fff", // Cor do texto que o usuário digita
    fontSize: 16,
    marginBottom: 15, // Espaço entre o primeiro input e o segundo
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.4)", // Bordinha fina e semi-transparente
  },
});