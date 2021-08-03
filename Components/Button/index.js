import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  // const type = props.type;
  // // console.warn(type);
  // const content = props.content;
  // const onPress = props.onPress;
  // Destructuring
  const { type, content, onPress } = props;
  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFFA6" : "#171A20CC";
  return (
    <View style={styles.container}>
      <Pressable
        // compining 2 styles use array
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => {
          // console.warn("Hello");
          onPress();
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
