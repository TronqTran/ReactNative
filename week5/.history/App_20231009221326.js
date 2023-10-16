import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  TransitionPresets,
} from "@react-navigation/native-stack";
import Order from "./components/Order";
import OrderDetail from "./components/OrderDetail";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Order"
          component={Order}
          options={{
            headerShown: false, // Ẩn header nếu bạn không muốn hiển thị
          }}
        />
        <Stack.Screen
          name="Details"
          component={OrderDetail}
          options={{
            headerShown: false, // Ẩn header nếu bạn không muốn hiển thị
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
