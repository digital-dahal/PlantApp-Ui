import React from "react";
import { View, Dimensions, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import SwiperComponent from "../components/SwiperComponent";
export default function Details({ route }) {
  const { url, title, country } = route.params;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ justifyContent: "flex-start", paddingLeft: 15 }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Ionicons name="arrow-back" size={35} color="black" />
      </TouchableOpacity>
      <View
        style={{
          flex: 3.5,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 10,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around",
            paddingLeft: 10,
            alignItems: "center",
            height: "90%",
          }}
        >
          <View
            style={{
              padding: 15,
              backgroundColor: "#fff",
              borderRadius: 10,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Feather name="sun" size={32} color="#00a46c" />
          </View>
          <View
            style={{
              padding: 15,
              backgroundColor: "#fff",
              borderRadius: 10,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Feather name="sun" size={32} color="#00a46c" />
          </View>
          <View
            style={{
              padding: 15,
              backgroundColor: "#fff",
              borderRadius: 10,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Feather name="sun" size={32} color="#00a46c" />
          </View>
          <View
            style={{
              padding: 15,
              backgroundColor: "#fff",
              borderRadius: 10,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Feather name="sun" size={32} color="#00a46c" />
          </View>
        </View>
        <View style={{ paddingLeft: 70, overflow: "hidden" }}>
          <SwiperComponent />
        </View>
      </View>
      <View style={{ width: "100%", flex: 1, paddingHorizontal: 5 }}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 7,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold", opacity: 0.5 }}>
            {title}
          </Text>
          <View
            style={{
              height: 40,
              backgroundColor: "#00a46c",
              width: 90,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "700" }}>More</Text>
          </View>
        </View>
        <Text
          style={{
            fontWeight: "300",
            fontSize: 15,
            paddingTop: 5,
            color: "#00a46c",
            opacity: 0.5,
            textDecorationLine: "underline",
            paddingLeft: 10,
            position: "relative",
            top: -10,
          }}
        >
          {country}
        </Text>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            flex: 1,
          }}
        >
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#00a46c",
              borderTopRightRadius: 20,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600", fontSize: 20 }}>
              Buy Now
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#000", fontWeight: "600", fontSize: 20 }}>
              Description
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
