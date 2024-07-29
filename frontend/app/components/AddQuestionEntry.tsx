import React, { useState, useContext } from "react";
import { TextInput, Button } from "react-native-paper";
import EntriesStorageContext from "../contexts/entriesStorageContext";
import { useNavigate } from "react-router-native";
import { BasicEntryWithoutId } from "../utils/types";

const AddQuestionEntry = () => {
  const navigate = useNavigate();
  const [entryText, setEntryText] = useState("");

  const entriesStorage = useContext(EntriesStorageContext);

  const onSubmit = async () => {
    try {
      const newEntry: BasicEntryWithoutId = {
        text: entryText,
        type: "Question",
        datetime: new Date(),
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

export default AddQuestionEntry;
