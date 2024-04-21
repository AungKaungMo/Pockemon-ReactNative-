import { SafeAreaView, StyleSheet, Platform, FlatList } from "react-native";
import PockemonCard from "./components/PockemonCard";

export default function App() {
  const pockemonData = [
    {
      name: "Charmander",
      image: require("./assets/images/aligator.png"),
      type: "Water",
      hp: 39,
      moves: ["Scratch", "Ember", "Growl", "Leer"],
      weaknesses: ["Fire", "Wind"],
    },
    {
      name: "Bulbsaur",
      image: require("./assets/images/bulbasaur.png"),
      type: "Grass",
      hp: 23,
      moves: ["Scratch", "Blow", "Grass", "Leaf"],
      weaknesses: ["Electric", "Fire"],
    },
    {
      name: "Cutie",
      image: require("./assets/images/cutie.png"),
      type: "Water",
      hp: 42,
      moves: ["Water", "Blow"],
      weaknesses: ["Rock", "Wind"],
    },
    {
      name: "Pickacuu",
      image: require("./assets/images/pickacuu.png"),
      type: "Electric",
      hp: 50,
      moves: ["Battel", "Enjoy", "Ego"],
      weaknesses: ["Rock", "Wind"],
    },
    {
      name: "Moneeky",
      image: require("./assets/images/moneeky.png"),
      type: "Fire",
      hp: 33,
      moves: ["Royal", "Leef", "Blow"],
      weaknesses: ["Water", "Rock"],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pockemonData}
        renderItem={({ item }) => <PockemonCard item={item} />}
        keyExtractor={pockemonData.name}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
