import { View } from "react-native";

export default function Box(props) {
  const boxStyle = {
    minHeight: props.size,
    minWidth: props.size,
    backgroundColor: props.color,
  };

  return <View style={boxStyle}></View>;
}
