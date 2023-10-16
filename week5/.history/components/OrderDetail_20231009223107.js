import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import imgBlue from "../assets/vs_blue.png";
import imgBlueNavi from "../assets/vs_silver.png";
import imgRed from "../assets/vs_red.png";
import imgBlack from "../assets/vs_black.png";

const OrderDetail = () => {
  const [img, setImg] = useState(imgBlue);
  const [textColor, setTextColor] = useState("đỏ");
  const [provide, setProvide] = useState("Tiki Tradding");
  const [price, setPrice] = useState("1.790.000 đ");

  const handlerSetImgStatusWhite = () => {
    setImg(imgBlueNavi);
    setTextColor("trắng");
    setProvide("Shoppe Trading");
    setPrice("2.790.000 đ");
  };
  const handlerSetImgStatusRed = () => {
    setImg(imgRed);
    setTextColor("đỏ");
    setProvide("Lazada Trading");
    setPrice("7.777.000 đ");
  };
  const handlerSetImgStatusBlack = () => {
    setImg(imgBlack);
    setTextColor("đen");
    setProvide("SenDo Trading");
    setPrice("22.990.000 đ");
  };
  const handlerSetImgStatusBlue = () => {
    setImg(imgBlue);
    setTextColor("xanh");
    setProvide("Tiki Trading");
    setPrice("1.790.000 đ");
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Image style={styles.img} source={img} />
        <View style={styles.boxText}>
          <Text style={styles.textHeader}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          <Text style={styles.color}>
            Màu: <Text style={styles.color1}>{textColor}</Text>
          </Text>
          <Text style={styles.provide}>
            Cung cấp bởi <Text style={styles.color1}>{provide}</Text>
          </Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
      <View style={styles.boxBottom}>
        <Text style={styles.textChoMau}>Chọn một màu bên dưới:</Text>
        <View style={styles.boxColor}>
          <Pressable
            style={[styles.boxColor1, styles.boxColorWH]}
            onPress={handlerSetImgStatusWhite}
          ></Pressable>
          <Pressable
            style={[styles.boxColor2, styles.boxColorWH]}
            onPress={handlerSetImgStatusRed}
          ></Pressable>
          <Pressable
            style={[styles.boxColor3, styles.boxColorWH]}
            onPress={handlerSetImgStatusBlack}
          ></Pressable>
          <Pressable
            style={[styles.boxColor4, styles.boxColorWH]}
            onPress={handlerSetImgStatusBlue}
          ></Pressable>
        </View>
        <View style={styles.button}>
          <Pressable style={styles.button1}>
            <Text style={styles.text1}>XONG</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  img: {
    width: 114,
    height: 128,
  },
  boxTop: {
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
    marginTop: 10,
    marginLeft: 17,
  },
  boxColor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 13,
    marginBottom: 36,
  },
  boxColorWH: {
    width: 85,
    height: 80,
  },
  boxColor1: { backgroundColor: "white" },
  boxColor2: { backgroundColor: "rgba(243, 13, 13, 1)" },
  boxColor3: { backgroundColor: "rgba(0, 0, 0, 1)" },
  boxColor4: { backgroundColor: "rgba(35, 72, 150, 1)" },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  button1: {
    justifyContent: "center",
    alignItems: "center",
    width: 326,
    height: 44,
    backgroundColor: "rgba(25, 82, 226, 0.58)",
    border: "1px solid rgba(202, 21, 54, 1)",
    borderRadius: 10,
  },
  text1: {
    fontSize: 20,
    fontWeight: 700,
    color: "rgba(249, 242, 242, 1)",
  },
});

export default OrderDetail;
