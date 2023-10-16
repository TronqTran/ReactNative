import { StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Order from "./components/Order";
import OrderDetail from "./components/OrderDetail";
const Stack = createNativeStackNavigator();
export default function App() {
  const navigation = useNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Order"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
                transform: [
                  {
                    translateX: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [200, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      >
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Details" component={OrderDetail} />
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
