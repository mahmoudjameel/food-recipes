import {
  Pressable,
  StyleSheet,
  View,
  Text,
  GestureResponderEvent,
} from "react-native";

import IonIcons from "@expo/vector-icons/Ionicons";
import colors from "../utils/colors";

interface _props {
  title: string;
  color: string;
  onPress: (e: GestureResponderEvent) => void;
}

const CategoryGridTile = (props: _props) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressedItem,
          { borderColor: props.color },
        ]}
        android_ripple={{ color: "#fafafa" }}
        onPress={props.onPress}
      >
        <View style={styles.innerContainer}>
          <View style={[styles.icon, { backgroundColor: props.color }]}>
            <IonIcons name="fast-food" color={"white"} size={20} />
          </View>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    height: 150,
    borderRadius: 20,
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  icon: {
    padding: 8,
    borderRadius: 100,
    marginBottom: 12,
  },
  pressedItem: {
    borderWidth: 4,
  },
  button: {
    flex: 1,
    borderRadius: 20,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
