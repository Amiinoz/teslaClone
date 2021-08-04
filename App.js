import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
// import CarItem from "./Components/CarItem";
import CarList from "./Components/CarsList";
import Header from "./Components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CarItem
        name={"Model X"}
        tagline={"Order online for"}
        taglineCTA={"Touchless Delivery"}
        image={require("./assets/images/ModelX.jpeg")}
      /> */}
      <Header />
      <CarList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
