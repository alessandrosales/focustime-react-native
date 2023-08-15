import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { fontSizes, spacing } from "../utils/sizes";

export function Focus({ addSubject }) {
  const [subject, setSubject] = useState();

  useEffect(() => {
    console.log(Platform.OS, subject);
  }, [subject]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          onChangeText={setSubject}
        />
        <View style={styles.buttonContainer}>
          <RoundedButton
            title="+"
            size={fontSizes.xxl}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "top",
    flexDirection: "row",
  },
});
