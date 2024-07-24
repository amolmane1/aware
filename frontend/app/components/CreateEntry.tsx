import React, { useContext } from "react";
import { View } from "react-native";
import { useFormik } from "formik";
import { TextInput, RadioButton, Button } from "react-native-paper";
import EntriesStorageContext from "../contexts/entriesStorageContext";
import { useNavigate } from "react-router-native";

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
      <RadioButton.Group
        onValueChange={formik.handleChange("type")}
        value={formik.values.type}
      >
        <RadioButton.Item label="Meditation" value="meditation" />
        <RadioButton.Item label="Insight" value="insight" />
        <RadioButton.Item label="Question" value="question" />
        <RadioButton.Item label="Musing" value="musing" />
      </RadioButton.Group>
      <TextInput
        label="Text"
        value={formik.values.text}
        onChangeText={formik.handleChange("text")}
      />
      <Button onPress={() => formik.handleSubmit()}>Submit</Button>
    </View>
  );
};

export default CreateEntry;
