import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { tracks } from "../data/tracks";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tracks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("PlayerScreen", { track: item })}>
            <View style={styles.card}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.artist}>{item.artist}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  title: { fontSize: 16, fontWeight: "bold" },
  artist: { fontSize: 14, color: "gray" }
});