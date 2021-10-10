import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation from "./src/navigations/Navigator";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
 <NavigationContainer  >
   <BottomNavigation />
 </NavigationContainer>
  );
}
