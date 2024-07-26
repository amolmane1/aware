import React, { useContext } from "react";
import { View } from "react-native";
import { useFormik } from "formik";
import { TextInput, Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker"; // Updated import
import EntriesStorageContext from "../contexts/entriesStorageContext";
import { useNavigate } from "react-router-native";
import { SelectList } from "react-native-dropdown-select-list";
import Timer from "./Timer";
import MeditationTimer from "./MeditationTimer";

const dropdownOptions = [
  { key: "1", value: "Musing" },
  { key: "2", value: "Meditation" },
  { key: "3", value: "Question" },
  { key: "4", value: "Insight" },
];

const CreateEntry = () => {
  const entriesStorage = useContext(EntriesStorageContext);
  const navigate = useNavigate();

  const initialValues = {
    type: "",
    text: "",
  };

  const onSubmit = async (values: { type: string; text: string }) => {
    try {
      const newEntry = {
        ...values,
        datetime: new Date(),
      };
      await entriesStorage.addEntry(newEntry);
      console.log("Entry saved successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error saving entry:", error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View>
      <SelectList
        setSelected={(val: string) => {
          formik.setFieldValue("type", val);
          console.log(formik.values.type);
        }}
        data={dropdownOptions}
        save="value"
      />
      <TextInput
        label="Text"
        value={formik.values.text}
        onChangeText={formik.handleChange("text")}
      />
      <Button onPress={() => formik.handleSubmit()}>Submit</Button>
      {formik.values.type === "Meditation" && <MeditationTimer />}
    </View>
  );
};

export default CreateEntry;
