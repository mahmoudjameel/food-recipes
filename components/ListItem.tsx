import { StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";

interface _listProps {
  content: string;
}

const ListItem = ({ content }: _listProps) => {
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          width: 6,
          height: 6,
          backgroundColor: colors.primary,
          borderRadius: 100,
        }}
      ></View>
      <View style={styles.textWrapper}>
        <Text style={styles.desc}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  desc: {},
  textWrapper: {
    padding: 10,
    backgroundColor: colors.bgGrey,
    borderRadius: 12,
    borderColor: "#d5d5d5",
    flex: 1,
  },
});

export default ListItem;
