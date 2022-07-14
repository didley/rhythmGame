import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Beater } from "./components/beater";

export default function App() {
  const beaterConfig = {
    yOffset: -30,
    yDestination: 80,
  };
  const [yLoc, setYLoc] = useState(0);

  const handlePress = async () => {
    setYLoc(beaterConfig.yDestination);

    setInterval(() => {
      setYLoc((prev) => (prev > beaterConfig.yOffset ? prev - 1 : prev));
    }, 1);
  };

  return (
    <View
      style={styles.container}
      onTouchStart={handlePress}
      onTouchMove={(e) => setYLoc(e.nativeEvent.locationY / 100)}
    >
      <Beater yLoc={yLoc} yOffset={-30} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
