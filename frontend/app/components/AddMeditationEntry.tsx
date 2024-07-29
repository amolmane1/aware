import React, { useState, useContext } from "react";
import { TextInput, Button, Text } from "react-native-paper";
import EntriesStorageContext from "../contexts/entriesStorageContext";
import { useLocation, useNavigate } from "react-router-native";
import { formatTime } from "../utils/helper_functions";
import { EntryWithoutId, MeditationEntryWithoutId } from "../utils/types";

const AddMeditationEntry = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { elapsedTime } = location.state;
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
      navigate("/");
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
