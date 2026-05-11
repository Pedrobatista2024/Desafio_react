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
            
            {/* Link 1: Recuperar Senha */}
            <Link href="/recuperar-senha" style={styles.link}>
              Esqueceu a senha?
            </Link>

            {/* Link 2: Criar Conta */}
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
button: {
    width: "100%", // Ocupa a largura total da caixa 'form'
    height: 50, // Mesma altura dos inputs para manter a harmonia
    backgroundColor: "#007BFF", // Cor azul padrão (você pode trocar por qualquer hexadecimal)
    borderRadius: 8, // Cantos arredondados iguais aos dos inputs
    justifyContent: "center", // Centraliza o texto do botão verticalmente
    alignItems: "center", // Centraliza o texto do botão horizontalmente
    marginTop: 10, // Dá um espaço do input de senha
    // Sombra para dar profundidade (opcional)
    elevation: 3, // Sombra para Android
    shadowColor: "#000", // Sombra para iOS/Web
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  // 3. ADICIONADO: Estilo do texto dentro do Botão
  buttonText: {
    color: "#fff", // Letra branca
    fontSize: 18,
    fontWeight: "bold", // Letra em negrito
  },
  linkContainer: {
    flexDirection: "row", // Coloca os links lado a lado
    justifyContent: "space-between", // Empurra um link para a esquerda e o outro para a direita
    width: "100%", // Ocupa a largura total do formulário
    marginTop: 20, // Dá distância do botão "Entrar"
  },
  link: {
    color: "#ccc", // Cinza claro para não brigar com o botão principal
    fontSize: 14,
    textDecorationLine: "underline", // Deixa o texto sublinhado, indicando que é clicável
  },
  linkBold: {
    color: "#fff", // Branco para dar um destaque extra no "Criar Conta"
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: "underline",
  }
});