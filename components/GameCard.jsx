import { useEffect, useRef } from "react";
import { Image, Text, View, StyleSheet, Animated } from "react-native";
import { Score } from "./Score";

export function GameCard({ game }) {
  return (
    <View
      key={game.slug}
      className="flex-row bg-zinc-900 rounded-xl p-4 gap-4 mb-10"
    >
      <Image source={{ uri: game.image }} style={styles.image} />
      <View>
        <Text className="mb-1" style={styles.title}>
          {game.title}
        </Text>
        {/* <Text style={styles.score}>{game.score}</Text> */}
        <Score score={game.score} maxScore={100} />
        <Text className="mt-2 flex-shrink-0" style={styles.description}>
          {game.description}
        </Text>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    color: "#eee",
    fontSize: 14,
    marginTop: 5,
  },
  score: {
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
});
