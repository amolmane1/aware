import * as React from "react";
import { Modal, Portal, Text, Button, Card } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";

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

const ChooseEntryType = () => {
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
              <Link to="/add-entry/meditation">
                <Button mode="outlined">Meditation</Button>
              </Link>
              <Link to="/add-entry/musing">
                <Button mode="outlined">Musing</Button>
              </Link>
              <Link to="/add-entry/question">
                <Button mode="outlined">Question</Button>
              </Link>
              <Link to="/add-entry/insight">
                <Button mode="outlined">Insight</Button>
              </Link>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ChooseEntryType;
