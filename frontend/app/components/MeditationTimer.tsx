import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";

const MeditationTimer: React.FC = () => {
  const startMeditation = (values: { duration: string }) => {
    console.log("start ", values.duration);
  };

  const formik = useFormik({
    initialValues: { duration: "" },
    onSubmit: startMeditation,
  });

  return (
    <View>
      <View>
        <TextInput
          label="Duration (minutes)"
          value={formik.values.duration}
          onChangeText={formik.handleChange("duration")}
        />
        <Button onPress={() => formik.handleSubmit()}>Start Meditation</Button>
      </View>
    </View>
  );
};

export default MeditationTimer;
