import { ImageBackground,TouchableOpacity, StyleSheet, Text, View, TextInput } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/fundol.png")}
      resizeMode="cover"
      style={styles.background}
   >
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.brandTitle}>MAIS HORAS</Text>
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
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
          <View style={styles.linkContainer}>
            <Link href="/recuperar-senha" style={styles.link}>
            Esqueceu a senha?
            </Link>
            <Link href="/criar-conta" style={styles.linkBold}>
            Criar uma conta
            </Link>
          </View>
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
    width: "100%", 
    height: 50, 
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 8, 
    paddingHorizontal: 15, 
    color: "#fff", 
    fontSize: 16,
    marginBottom: 15, 
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.4)", 
  },
button: {
    width: "100%", 
    height: 50, 
    backgroundColor: "#007BFF",
    borderRadius: 8, 
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 10, 
    elevation: 3,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  buttonText: {
    color: "#fff", 
    fontSize: 18,
    fontWeight: "bold", 
  },
  linkContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: "100%", 
    marginTop: 20, 
  },
  link: {
    color: "#ccc", 
    fontSize: 14,
    textDecorationLine: "underline", 
  },
  linkBold: {
    color: "#fff", 
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  brandTitle: {
    color: "#fff",
    fontSize: 42, 
    fontWeight: "900",
    letterSpacing: 2, 
    textAlign: "center",
  },
  subtitle: {
    color: "#aaa", 
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 40, 
    textAlign: "center",
  },
});