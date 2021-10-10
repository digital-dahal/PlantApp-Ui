import React from "react";
import { View, StyleSheet,Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const Favourite = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.contaner}>
        <Text>HEy </Text>
      </View>
    </SafeAreaView>
  );
};

export default Favourite;
const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
});
