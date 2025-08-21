import React, { createContext, useState, useRef } from "react";
import { Platform } from "react-native";
import { Audio } from "expo-av";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = useRef(null);

  const playTrack = async (track) => {
    try {
      if (sound.current) {
        await sound.current.unloadAsync();
      }
      setCurrentTrack(track);

      if (Platform.OS === "web") {
        const audio = new Audio.Sound();
        await audio.loadAsync({ uri: track.preview_url });
        sound.current = audio;
      } else {
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: track.preview_url },
          { shouldPlay: true }
        );
        sound.current = newSound;
      }
      setIsPlaying(true);
    } catch (e) {
      console.error("Error playing track", e);
    }
  };

  const togglePlayPause = async () => {
    if (!sound.current) return;
    if (isPlaying) {
      await sound.current.pauseAsync();
      setIsPlaying(false);
    } else {
      await sound.current.playAsync();
      setIsPlaying(true);
    }
  };

  return (
    <PlayerContext.Provider
      value={{ currentTrack, isPlaying, playTrack, togglePlayPause }}
    >
      {children}
    </PlayerContext.Provider>
  );
};