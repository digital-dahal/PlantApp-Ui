import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper/src";
export default function SwiperComponent() {
  return (
    <Swiper
      autoplay={true}
      style={styles.wrapper}
      dotStyle={{
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: "#fff",
        marginTop: -200,
        right: 30,
      }}
      activeDotColor="#fff"
      activeDotStyle={{
        width: 30,
        height: 6,
        borderRadius: 10,
        backgroundColor: "#fff",
        marginTop: -200,
        right: 30,
      }}
    >
      <View style={styles.slide}>
        <Image
          source={require("../assets/p2.jpeg")}
          style={{
            height: 465,
            width: 400,
            resizeMode: "stretch",
            borderRadius: 20,
            overflow: "hidden",
          }}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../assets/p1.jpeg")}
          style={{
            height: 465,
            width: 400,
            resizeMode: "stretch",
            overflow: "hidden",
          }}
        />
      </View>
    </Swiper>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    borderRadius: 20,
  },
  slide: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
