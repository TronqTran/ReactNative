import React from "react";
import { Image, StyleSheet, View } from "react-native";
import imgPhone from "../assets/vs_blue.png";

const OrderDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxtTop}>
        <Image style={styles.img} source={imgPhone} />
        <View style={styles.boxText}>
          <Text style={styles.textHeader}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 114,
    height: 128,
  },
});

export default OrderDetail;
