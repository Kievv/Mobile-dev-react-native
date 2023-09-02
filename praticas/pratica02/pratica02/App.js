import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View
      style={[
        styles.container,
        styles.flexColumn,
        styles.justifySpaceEvenly,
        styles.alignCenter,
      ]}
    >
      <Box size={"50px"} color="blue" />
      <Box size="50px" color="red" />
      <Box size="50px" color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  flexColumn: {
    flexDirection: "column",
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumnReverse: {
    flexDirection: "column-reverse",
  },
  flexRowReverse: {
    flexDirection: "row-reverse",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifySpaceBetween: {
    justifyContent: "space-between",
  },
  justifySpaceAround: {
    justifyContent: "space-around",
  },
  justifySpaceEvenly: {
    justifyContent: "space-evenly",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  alignCenter: {
    alignItems: "center",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  alignStretch: {
    alignItems: "stretch",
  },
});
