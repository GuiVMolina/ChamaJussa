import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import { Card } from "../../components/card/Card";
import { Navbar } from "../../components/navbar/Navbar";

const { width } = Dimensions.get("window");

export const Listagem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.row}>
          <View>
            <Text style={styles.text}>Olá, Késsia</Text>
            <Text style={styles.title}>Minhas OSs</Text>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Nova OS</Text>
          </Pressable>
        </View>
        <View style={styles.buttonArea}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Todos</Text>
          </Pressable>
          <Pressable style={styles.buttonOff}>
            <Text style={styles.buttonTextOff}>Abertas</Text>
          </Pressable>
          <Pressable style={styles.buttonOff}>
            <Text style={styles.buttonTextOff}>Em Andamento</Text>
          </Pressable>
          <Pressable style={styles.buttonOff}>
            <Text style={styles.buttonTextOff}>Concluídas</Text>
          </Pressable>
        </View>
        <View style={styles.cards}>
          <Card />
          <Card />
          <Card />
        </View>
      </View>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "hsl(0, 0%, 95%)",
  },
  main: {
    padding: 20,
    gap: 20,
  },
  cards: {
    gap: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "hsl(215, 85%, 50%)",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Montserrat_700Bold",
  },
  buttonOff: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: "hsl(0, 0%, 85%)",
  },
  buttonTextOff: {
    fontSize: 16,
    color: "hsl(0, 0%, 60%)",
    fontFamily: "Montserrat_400Regular",
  },
  buttonArea: {
    flexDirection: "row",
    gap: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: "Montserrat_400Regular",
  },
  title: {
    fontSize: 24,
    fontFamily: "Montserrat_700Bold",
  },
});
