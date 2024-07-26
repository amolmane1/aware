import * as React from "react";
import { Modal, Portal, Text, Button, Card } from "react-native-paper";
import { StyleSheet, View } from "react-native";

interface ChooseEntryTypeModalProps {
  visible: boolean;
  hideModal: () => void;
}

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

const ChooseEntryTypeModal: React.FC<ChooseEntryTypeModalProps> = ({
  visible,
  hideModal,
}) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
      >
        <Card>
          <Card.Content>
            <View style={styles.cardHeaderAndButtonsContainer}>
              <View style={styles.cardHeaderContainer}>
                <Text variant="titleLarge">Add new entry</Text>
                <Text variant="bodyLarge">Select entry type</Text>
              </View>

              <View style={styles.buttonContainer}>
                <Button mode="outlined">Meditation</Button>
                <Button mode="outlined">Musing</Button>
                <Button mode="outlined">Question</Button>
                <Button mode="outlined">Insight</Button>
              </View>
            </View>
          </Card.Content>
        </Card>
      </Modal>
    </Portal>
  );
};

export default ChooseEntryTypeModal;
