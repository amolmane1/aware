import * as React from "react";
import { Modal, Portal, Text, Button, Card } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "transparent",
    padding: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10, // For Android
  },
  cardHeaderAndButtonsContainer: {
    alignItems: "center",
    gap: 20,
    margin: 20,
  },
  cardHeaderContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    gap: 10,
  },
});

import { NavigationProp } from "@react-navigation/native";

const ChooseEntryType = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  return (
    <View style={styles.containerStyle}>
      <Card>
        <Card.Content>
          <View style={styles.cardHeaderAndButtonsContainer}>
            <View style={styles.cardHeaderContainer}>
              <Text variant="titleLarge">Add new entry</Text>
              <Text variant="bodyLarge">Select entry type</Text>
            </View>

            <View style={styles.buttonContainer}>
              <Button
                mode="outlined"
                onPress={() => navigation.navigate("Set Meditation Duration")}
              >
                Meditation
              </Button>
              <Button
                mode="outlined"
                onPress={() => navigation.navigate("Add Musing")}
              >
                Musing
              </Button>
              <Button
                mode="outlined"
                onPress={() => navigation.navigate("Add Question")}
              >
                Question
              </Button>
              <Button
                mode="outlined"
                onPress={() => navigation.navigate("Add Insight")}
              >
                Insight
              </Button>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ChooseEntryType;
