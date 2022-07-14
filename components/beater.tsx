import { Dimensions, StyleSheet, Text, View } from "react-native";

type Props = {
  /** 0 mid, -50 bottom and 50 top of screen*/
  yLoc: number;
  yOffset: number;
};

export const Beater = ({ yLoc, yOffset }: Props) => {
  const screenYLoc =
    (-Dimensions.get("screen").height / 100) * (yLoc + yOffset);

  return (
    <View
      style={[
        styles.container,
        {
          transform: [{ translateY: screenYLoc }, { rotate: "90deg" }],
        },
      ]}
    >
      <View style={[styles.container]}>
        <Text style={styles.text}>Beater</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6000ce",
    width: 150,
    height: 50,
  },
  text: { color: "#eee" },
});
