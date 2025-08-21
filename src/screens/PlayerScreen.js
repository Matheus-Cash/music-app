import React, { useContext, useEffect } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { PlayerContext } from "../context/PlayerContext";

export default function PlayerScreen({ route }) {
  const { track } = route.params;
  const { playTrack, togglePlayPause, isPlaying } = useContext(PlayerContext);

  useEffect(() => {
    playTrack(track);
  }, [track]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: track.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{track.title}</Text>
      <Text style={styles.artist}>{track.artist}</Text>
      <Button title={isPlaying ? "Pause" : "Play"} onPress={togglePlayPause} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: 300, height: 300, borderRadius: 12, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
  artist: { fontSize: 18, color: "gray", marginBottom: 20 }
});