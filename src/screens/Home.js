import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Ionicons name="ios-menu" size={35} color="#b5b6b7" />
        <View style={styles.textLogoContainer}>
          <View>
            <Text style={styles.headerText}>Hi UisHopy</Text>
          </View>
          <View style={{height:140,overflow:"hidden"}}>
            <Image
              source={require("../assets/plantlogo.jpg")}
              style={{ height: 150, width: 140, resizeMode:"cover"}}
            />
          </View>
        </View>
      </View>
      <LinearGradient   
      colors={["rgba(0,164,109,0.4)","transparent"]}
      style={{
        height:90,
        left:0,
        right:0,
        margin:-45
      }}

      ></LinearGradient>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    height: Dimensions.get("window").height / 3,
    backgroundColor: "#00a46c",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  textLogoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    overflow:"hidden",
  },
  headerText: {
    fontSize: 35,
    fontWeight:"900",
    color: "#fff",
  },
});
