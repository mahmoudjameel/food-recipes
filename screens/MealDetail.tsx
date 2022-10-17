import Ionicons from "@expo/vector-icons/Feather";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";
import CardWrapper, { CardHeading } from "../components/CardWrapper";
import ListItem from "../components/ListItem";
import { MEALS } from "../data/dummy-data";
import { StackParamList } from "../types/react-navigation";
import colors from "../utils/colors";

type DetailsProp = NativeStackScreenProps<StackParamList, "MealDetails">;

const MealDetails = ({ navigation, route }: DetailsProp) => {
  const mealId = route.params?.mealId;

  const mealSelected = MEALS.find((meal) => meal.id === mealId);
  const mealIngredients: string[] = mealSelected?.ingredients;
  const mealRecipes: string[] = mealSelected?.steps;
  const title: string = mealSelected?.title;
  const lastText = title.split(" ").pop();
  const firstText = title.replace(lastText!, "");

  const ingredients = mealIngredients.map((ing) => (
    <ListItem content={ing} key={ing} />
  ));

  const recipe = mealRecipes.map((recipe) => (
    <ListItem content={recipe} key={recipe} />
  ));

  const onSaveMeal = () => {
    Alert.alert(`Meal Saved`, `You saved ${title} to favorites!`, [
      { text: "Okay Thanks!", style: "cancel" },
    ]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            onPress={onSaveMeal}
            style={({ pressed }) => pressed && { opacity: 0.5 }}
          >
            <Ionicons name="bookmark" size={24} color={"white"} />
          </Pressable>
        );
      },
    });
  }, [navigation, onSaveMeal]);

  return (
    <ScrollView style={styles.wrapper}>
      <Image source={{ uri: mealSelected?.imageUrl }} style={styles.image} />
      <View style={{ marginTop: -20, flex: 1 }}>
        <CardWrapper>
          <Text style={styles.title}>
            {firstText} <Text style={{ color: colors.red }}>{lastText}</Text>
          </Text>
          <Text style={styles.descText}>
            {mealSelected?.complexity.toUpperCase()}
          </Text>
        </CardWrapper>
        <CardWrapper>
          <CardHeading title="Ingredients" />
          <View style={styles.margin}>{ingredients}</View>

          <View style={styles.margin}>
            <CardHeading title="Recipe" />
            <View style={styles.margin}>{recipe}</View>
          </View>
        </CardWrapper>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  image: {
    width: "100%",
    height: 195,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  margin: {
    marginTop: 12,
  },
  descText: {
    fontSize: 12,
    color: colors.primary,
  },
});
export default MealDetails;
