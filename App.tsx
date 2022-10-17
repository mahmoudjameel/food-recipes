import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Categories from "./screens/Categories";
import MealDetails from "./screens/MealDetail";
import MealsOverview from "./screens/MealsOverview";
import { StackParamList } from "./types/react-navigation";
import colors from "./utils/colors";

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#66A936" },
            contentStyle: { backgroundColor: "#191A1C" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="MealCategories"
            options={{
              title: "Food Pro",
            }}
            component={Categories}
          />
          <Stack.Screen name="MealOverview" component={MealsOverview} />
          <Stack.Screen
            name="MealDetails"
            component={MealDetails}
            options={{ title: "Meal Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 20,
    paddingTop: 12,
  },
  header: {
    color: colors.primary,
    fontSize: 32,
    fontWeight: "bold",
  },
});
