import { View, Text, StyleSheet } from "react-native";

export const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>OS - 001</Text>
        <Text style={styles.status}>Aberta</Text>
      </View>
      <Text style={styles.subtitle}>Vazamento hidráulico no Bloco B</Text>
      <Text style={styles.text}>
        Há um vazamento constante de água por baixo da pia do banheiro masculino
        do segundo andar do Bloco B...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  status: {
    width: 100,
    paddingVertical: 6,
    fontSize: 16,
    borderRadius: 10,
    color: "hsl(215, 85%, 50%)",
    fontFamily: "Montserrat_700Bold",
    backgroundColor: "hsla(215, 85%, 50%, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Montserrat_700Bold",
    color: "hsl(215, 85%, 50%)",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
  },
  text: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
  },
});
