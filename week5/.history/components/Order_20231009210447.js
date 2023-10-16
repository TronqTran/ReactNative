import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import imgPhone from "../assets/vs_blue.png";
import Rating from "../assets/star.svg";
import chamHoi from "../assets/chamhoi.svg";
import muiTen from "../assets/Vector.svg";
const Order = ({ navigation }) => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={imgPhone} />
      </View>
      <Text style={styles.text}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={styles.boxRating}>
        <View style={styles.viewRating}>
          <Image style={styles.rating} source={Rating} />
          <Image style={styles.rating} source={Rating} />
          <Image style={styles.rating} source={Rating} />
          <Image style={styles.rating} source={Rating} />
          <Image style={styles.rating} source={Rating} />
        </View>
        <View style={[styles.text, styles.review]}>(Xem 828 đánh giá)</View>
      </View>
      <View style={styles.boxprice}>
        <Text style={styles.price}>1.790.000 đ</Text>
        <Text style={styles.price1}>1.790.000 đ</Text>
      </View>
      <View style={styles.boxdesc}>
        <Text style={styles.desc}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image style={styles.imgch} source={chamHoi} />
      </View>
      <Pressable
        style={styles.boxChon}
        onPress={() => navigation.navigate("Details", { animation: "slide" })}
      >
        <Text style={styles.textChon}>4 MÀU-CHỌN MÀU</Text>
        <Image style={styles.imgmt} source={muiTen} />
      </Pressable>
      <Pressable style={styles.boxMua}>
        <Text style={styles.textMua}>CHỌN MUA</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 30,
  },
  img: {
    width: 301,
    height: 361,
  },
  text: {
    maxWidth: 300,
    fontSize: 15,
    fontWeight: 400,
    color: "#000",
    marginBottom: 5,
  },
  boxRating: {
    flexDirection: "row",
    gap: 23,
    alignItems: "center",
    marginBottom: 10,
  },
  viewRating: {
    flexDirection: "row",
    gap: 2,
  },
  rating: {
    width: 23,
    height: 25,
  },
  review: {
    marginTop: 10,
  },
  boxprice: {
    flexDirection: "row",
    gap: 44,
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: 700,
  },
  price1: {
    textDecorationLine: " line-through",
    fontSize: 15,
    fontWeight: 700,
    color: "rgba(0, 0, 0, 0.58)",
  },
  boxdesc: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  desc: {
    color: "rgba(250, 0, 0, 1)",
    fontSize: 13,
    fontWeight: 700,
    marginTop: 13,
  },
  imgch: {
    width: 20,
    height: 20,
    marginTop: 10,
  },
  boxChon: {
    // backgroundColor:"#000",
    width: 332,
    height: 34,
    border: "1px solid rgba(0, 0, 0, 0.46)",
    borderRadius: 10,
    marginBottom: 18,
  },
  textChon: {
    position: "absolute",
    top: "7px",
    left: "103px",
  },
  imgmt: {
    width: 12,
    height: 14,
    position: "absolute",
    top: "10px",
    right: "20px",
  },
  boxMua: {
    width: 326,
    height: 44,
    backgroundColor: "red",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textMua: {
    fontSize: 20,
    fontWeight: 700,
    color: "rgba(249, 242, 242, 1)",
  },
});
export default Order;
