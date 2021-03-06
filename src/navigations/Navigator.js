import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Profile, Home, Favourite,Details } from "../screens";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export  function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={BottomNavigation} />
      <Stack.Screen name="Detail" component={Details}  />

    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
function FavouriteStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Favourite" component={Favourite} />
    </Stack.Navigator>
  );
}

function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          position: "relative",
          height: 80,
          backgroundColor:"#eff4f0",
          border: "none",
          elevation:0,
          outline: "none",
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "star" : "staro";
            return <AntDesign name={iconName} size={24} color={color} />;
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
            return <Ionicons name={iconName} size={24} color={color} />;
          }
          if (route.name === "Favourite") {
            iconName = focused ? "heart" : "hearto";
            return <AntDesign name={iconName} size={24} color={color} />;
          }
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favourite" component={FavouriteStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}
