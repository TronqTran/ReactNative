import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Order from "./components/Order";
import OrderDetail from "./components/OrderDetail";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Order /> */}
      <OrderDetail></OrderDetail>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
