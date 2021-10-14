import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Ionicons name="ios-menu" size={35} color="#b5b6b7" />
        <View style={styles.textLogoContainer}>
          <View>
            <Text style={styles.headerText}>Hi UisHopy</Text>
          </View>
          <View style={{ height: 140, overflow: "hidden" }}>
            <Image
              source={require("../assets/plantlogo.jpg")}
              style={{ height: 150, width: 140, resizeMode: "cover" }}
            />
          </View>
        </View>
      </View>
      <View style={{ zIndex: 5 }}>
        <LinearGradient
          colors={["rgba(0,164,109,0.4)", "transparent"]}
          style={{
            height: 70,
            left: 0,
            right: 0,
            margin: -40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: 70,
              height: 50,
              marginHorizontal: 45,
            }}
          >
            <TextInput
              placeholder="Search"
              placeholderTextColor="#00a46c"
              style={{
                width: 200,
                height: 40,
                paddingHorizontal: 3,
                outline: "none",
              }}
            />
            <AntDesign name="search1" size={24} color="#b5b6b7" />
          </View>
        </LinearGradient>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingTop: 30,
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 20 }}>Recommended</Text>
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

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 275, paddingTop: 10 }}
        >
          <Card url={require("../assets/p1.jpeg")} title="Botanical"  country="Russia"/>
          <Card
            url={{
              uri: "https://www.aquasabi.com/media/image/product/3856/lg/bacopa-monnieri-compact.jpg",
            }}
            title="Bacopa"
            country="Russia"
          />
          <Card
            url={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ91BFDCzOL5XyLCrD-StRrLVqcmA_uNk6RQ&usqp=CAU",
            }}
            title="Balloon Flower"
            country="Russia"
          />
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingTop: 20,
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 20 }}>
            Featured Plant
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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 275, paddingTop: 10 }}
        >
          <FeaturedCard url={require("../assets/p3.jpg")} />
          <FeaturedCard url={require("../assets/p3.jpg")} />
          <FeaturedCard url={require("../assets/p3.jpg")} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
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
    overflow: "hidden",
  },
  headerText: {
    fontSize: 35,
    fontWeight: "900",
    color: "#fff",
  },
});
// components
const Card = ({ url, title ,country}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        height: 255,
        marginHorizontal: 10,
        width: 160,
        backgroundColor: "#fff",
        flex: 1,
        borderRadius: 20,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: "hidden",
      }}
      onPress={() => {
        navigation.navigate("Detail", {
          url: url,
          title: title,
          country:country
        });
      }}
    >
      <Image
        style={{
          height: "100%",
          width: "100%",
          resizeMode: "cover",
          flex: 7,
        }}
        source={url}
      />
      <View
        style={{
          width: "100%",
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text numberOfLines={1} style={{ fontWeight: "600" }}>
            {title}
          </Text>
          <Text style={{ color: "#00a46c", fontWeight: "900" }}>400$</Text>
        </View>
        <Text
          style={{ fontWeight: "300", fontSize: 15, paddingTop: 5 ,color:"#00a46c",opacity:0.5,textDecorationLine:"underline"}}
        >
         {country}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const FeaturedCard = (props) => {
  return (
    <TouchableOpacity
      style={{
        height: 255,
        marginHorizontal: 10,
        width: 255,
        elevation: 4,
        backgroundColor: "#fff",
        flex: 1,
        borderRadius: 20,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        overflow: "hidden",
      }}
    >
      <Image
        style={{
          height: "100%",
          width: "100%",
          resizeMode: "cover",
          flex: 7,
        }}
        source={props.url}
      />
      <View
        style={{
          width: "100%",
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ fontWeight: "600" }}>Botanical</Text>
          <Text style={{ color: "#00a46c", fontWeight: "900" }}>400$</Text>
        </View>
        <Text
          numberOfLines={2}
          style={{ fontWeight: "400", fontSize: 10, paddingTop: 5 }}
        >
          This is very naughty plant as you know this is good for health of
          course if you eat it
        </Text>
      </View>
    </TouchableOpacity>
  );
};
