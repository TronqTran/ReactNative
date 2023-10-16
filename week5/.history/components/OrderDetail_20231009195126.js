import React from "react";
import { Image, StyleSheet, View } from "react-native";
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
          <Text style={styles.color}>Màu: đỏ</Text>
          <Text style={styles.provide}>Cung cấp bởi Tiki Tradding</Text>
          <Text style={styles.price}>1.790.000 đ</Text>
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
  boxText: {
    width: 100,
    height: 70,
  },
});

export default OrderDetail;
