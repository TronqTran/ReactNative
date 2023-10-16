import React from "react";
import { Image, StyleSheet, View } from "react-native";
import imgPhone from "../assets/vs_blue.png";

const API_Phone = [
  {
    key: 2,
    color: "xanh navi",
    provide: "Shoppe Trandding",
    price: "2.790.000 đ",
  },
  {
    key: 2,
    color: "đỏ",
    provide: "Tiki Trandding",
    price: "1.790.000 đ",
  },

  {
    key: 3,
    color: "đen",
    provide: "Lazada Trandding",
    price: "4.320.000 đ",
  },
  {
    key: 4,
    color: "đỏ",
    provide: "Tiki Trandding",
    price: "1.790.000 đ",
  },
];
const OrderDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxtTop}>
        <Image style={styles.img} source={imgPhone} />
        <View style={styles.boxText}>
          <Text style={styles.textHeader}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          <Text style={styles.textHeader}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          <Text style={styles.textColor}>
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
