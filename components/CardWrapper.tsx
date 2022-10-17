import { StyleSheet, Text, View } from "react-native";

interface _cardProps {
  children: React.ReactNode;
}
interface _cardHeadingProps {
  title: string;
}

//Card Heading Component (Optional)
const CardHeading = ({ title }: _cardHeadingProps) => {
  return <Text style={styles.heading}>{title}</Text>;
};

//Main Card Wrapper
const CardWrapper = ({ children }: _cardProps) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 24,
    marginBottom: 16,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export { CardHeading };
export default CardWrapper;
