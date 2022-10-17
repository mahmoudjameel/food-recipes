import { NavigationAction } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { StackParamList } from "../types/react-navigation";

type Props = NativeStackScreenProps<StackParamList, "MealCategories">;

const Categories = ({ route, navigation }: Props) => {
  const pressHandler = (itemData: any) => {
    navigation.navigate("MealOverview", { categoryId: itemData.item.id });
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => (
        <CategoryGridTile
          onPress={pressHandler.bind(this, item)}
          title={item.item.title}
          color={item.item.color}
        />
      )}
      numColumns={2}
    />
  );
};

export default Categories;
