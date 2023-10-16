import React from "react";
import { Image, StyleSheet, View } from "react-native";
import imgPhone from "../assets/vs_blue.png";

const OrderDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxtTop}>
        <Image source={imgPhone} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});

export default OrderDetail;
