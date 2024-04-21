import { View, Text, StyleSheet, Platform, Image } from "react-native";
import React, { memo } from "react";

const PockemonCard = memo(({ item }) => {
  const { name, image, type, hp, weaknesses, moves } = item;
  const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };

  const { borderColor, emoji } = getTypeDetails(type);

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>
      <Image
        source={image}
        resizeMode="contain"
        style={styles.image}
        accessibilityLabel={`${name} pockemon`}
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.moveContainer}>
        <Text style={styles.movesText}>moves: {moves.join(", ")}</Text>
      </View>

      <View style={styles.weaknessesContainer}>
        <Text style={styles.weaknessesText}>
          Weaknesses: {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  typeContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 22,
    fontWeight: "bold",
  },
  moveContainer: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  weaknessesContainer: {
    marginBottom: 8,
  },
  weaknessesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default PockemonCard;
