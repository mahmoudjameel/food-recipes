import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  GestureResponderEvent,
} from "react-native";
import { MealProps } from "../screens/MealsOverview";
import colors from "../utils/colors";

interface Props {
  id: string;
  title: string;
  imgUrl: string;
  complexity: string;
}

const MealItem = ({ title, imgUrl, complexity, id }: Props) => {
  const navigation = useNavigation<MealProps["navigation"]>();
  const PressHandler = (mealId: string) => {
    navigation.navigate("MealDetails", { mealId: mealId });
  };

  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={PressHandler.bind(this, id)}
        style={({ pressed }) => [pressed && styles.pressed]}
      >
        <View>
          <Image source={{ uri: imgUrl }} style={styles.image} />
          <View style={styles.textWrapper}>
            <Text numberOfLines={1} style={styles.titleText}>
              {title}
            </Text>
            <Text style={styles.descText}>{complexity.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 265,
    borderRadius: 24,
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "white",
  },
  pressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 195,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  textWrapper: {
    padding: 16,
  },
  titleText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  descText: {
    fontSize: 12,
    color: colors.primary,
  },
});
export default MealItem;
