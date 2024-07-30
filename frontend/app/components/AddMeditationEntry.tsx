import React, { useState, useContext } from "react";
import { TextInput, Button, Text } from "react-native-paper";
import EntriesStorageContext from "../contexts/entriesStorageContext";
import { formatTime } from "../utils/helper_functions";
import {
  AddMeditationProps,
  EntryWithoutId,
  MeditationEntryWithoutId,
} from "../utils/types";

const AddMeditationEntry = ({ route, navigation }: AddMeditationProps) => {
  const { elapsedTime } = route.params;
  const [entryText, setEntryText] = useState("");

  const entriesStorage = useContext(EntriesStorageContext);

  const onSubmit = async () => {
    try {
      console.log("ELAPSED TIME IN ADD MED ENTRY: ", elapsedTime);
      const newEntry: MeditationEntryWithoutId = {
        text: entryText,
        type: "Meditation",
        datetime: new Date(),
        duration: elapsedTime,
      };
      await entriesStorage.addEntry(newEntry);
      console.log("Entry saved successfully!");
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error saving entry:", error);
    }
  };

  return (
    <>
      <Text>Duration: {formatTime(elapsedTime)}</Text>
      <TextInput
        label="Entry Text"
        value={entryText}
        onChangeText={(text) => setEntryText(text)}
      />
      <Button mode="contained" onPress={onSubmit}>
        Submit
      </Button>
    </>
  );
};

export default AddMeditationEntry;
