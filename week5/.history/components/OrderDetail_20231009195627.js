import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import imgPhone from "../assets/vs_blue.png";

const API_Phone = [
  {
    key: 1,
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
    color: "xanh",
    provide: "SenDo Trandding",
    price: "7.770.000 đ",
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
          <Text style={styles.color}>
            Màu: <Text style={styles.color1}>đỏ</Text>
          </Text>
          <Text style={styles.provide}>Cung cấp bởi Tiki Tradding</Text>
          <Text style={styles.price}>1.790.000 đ</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  flex: 1,
  container: {},
  img: {
    width: 114,
    height: 128,
  },
  boxtTop: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 19,
  },
  textHeader: {
    fontSize: 15,
    fontWeight: 500,
    marginTop: 16,
    maxWidth: 164,
    marginBottom: 9,
  },
  color1: {
    fontWeight: 700,
    fontSize: 15,
  },
  color: {
    marginBottom: 9,
  },
});

export default OrderDetail;
