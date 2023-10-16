import React from "react";
import { Image, StyleSheet, View } from "react-native";
import imgPhone from "../assets/vs_blue.png";

const OrderDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxtTop}>
        <Image style={styles.img} source={imgPhone} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OrderDetail;
