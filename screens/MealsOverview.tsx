import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { StackParamList } from "../types/react-navigation";

type MealProps = NativeStackScreenProps<StackParamList, "MealOverview">;

type PropsRoute = MealProps["route"];
const MealsOverview = ({ navigation, route }: MealProps) => {
  const router = useRoute<PropsRoute>();
  const catId = router.params.categoryId;

  const Meals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  const Category = CATEGORIES.find((e) => e.id === catId);
  const CategoryTitle = Category && Category.title;

  useLayoutEffect(() => {
    navigation.setOptions({ title: CategoryTitle });
  }, [catId, navigation]);

  return (
    <View>
      <FlatList
        style={styles.wrapper}
        data={Meals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <MealItem
            id={itemData.item.id}
            complexity={itemData.item.complexity}
            imgUrl={itemData.item.imageUrl}
            title={itemData.item.title}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    marginTop: 24,
  },
});

export { MealProps };
export default MealsOverview;
