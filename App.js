import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { PlayerProvider } from "./src/context/PlayerContext";

export default function App() {
  return (
    <PlayerProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PlayerProvider>
  );
}