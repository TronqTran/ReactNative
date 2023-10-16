import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
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
          <Text style={styles.provide}>
            Cung cấp bởi <Text style={styles.color1}>Tiki Tradding</Text>
          </Text>
          <Text style={styles.price}>1.790.000 đ</Text>
        </View>
      </View>
      <View style={styles.boxBottom}>
        <Text style={styles.textChoMau}>Chọn một màu bên dưới:</Text>
        <View style={styles.boxColor}>
          <Pressable style={[styles.boxColor1, styles.boxColorWH]}></Pressable>
          <Pressable style={[styles.boxColor2, styles.boxColorWH]}></Pressable>
          <Pressable style={[styles.boxColor3, styles.boxColorWH]}></Pressable>
          <Pressable style={[styles.boxColor4, styles.boxColorWH]}></Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  img: {
    width: 114,
    height: 128,
  },
  boxtTop: {
    flexDirection: "row",
    gap: 19,
    marginBottom: 12,
  },
  textHeader: {
    fontSize: 15,
    fontWeight: 500,
    marginTop: 10,
    maxWidth: 170,
    marginBottom: 7,
  },
  color1: {
    fontWeight: 700,
    fontSize: 15,
  },
  color: {
    marginBottom: 7,
  },
  provide: {
    fontSize: 15,
  },
  price: {
    fontSize: 18,
    fontWeight: 700,
    marginTop: 6,
  },
  boxBottom: {
    backgroundColor: "#C4C4C4",
  },
  textChoMau: {
    fontSize: 18,
    fontWeight: 400,
  },
});

export default OrderDetail;
