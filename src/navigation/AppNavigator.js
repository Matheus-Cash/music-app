import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PlayerScreen from "../screens/PlayerScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Home" }} />
      <Stack.Screen name="PlayerScreen" component={PlayerScreen} options={{ title: "Player" }} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "musical-notes";
          else if (route.name === "Favoritos") iconName = "heart";
          else if (route.name === "Configurações") iconName = "settings";
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Favoritos" component={FavoritesScreen} />
      <Tab.Screen name="Configurações" component={SettingsScreen} />
    </Tab.Navigator>
  );
}