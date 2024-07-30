import React, { useState } from "react";
import { View, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Text } from "react-native-paper";
import { NavigationProp } from "@react-navigation/native";

interface SetMeditationDurationProps {
  navigation: NavigationProp<any>;
}

const SetMeditationDuration: React.FC<SetMeditationDurationProps> = ({
  navigation,
}) => {
  const [durationMinutes, setDurationMinutes] = useState(30);

  const handleDurationChange = (value: number) => {
    setDurationMinutes(value);
  };

  const handleSubmit = () => {
    navigation.navigate("Meditation Timer", {
      duration: durationMinutes * 60,
    });
  };

  return (
    <View>
      <Text>Choose your meditation duration:</Text>
      <Picker
        selectedValue={durationMinutes}
        onValueChange={handleDurationChange}
      >
        <Picker.Item label="1 minute" value={1} />
        <Picker.Item label="2 minutes" value={2} />
        <Picker.Item label="3 minutes" value={3} />
        <Picker.Item label="5 minutes" value={5} />
        <Picker.Item label="10 minutes" value={10} />
        <Picker.Item label="15 minutes" value={15} />
        <Picker.Item label="20 minutes" value={20} />
        <Picker.Item label="25 minutes" value={25} />
        <Picker.Item label="30 minutes" value={30} />
        <Picker.Item label="35 minutes" value={35} />
        <Picker.Item label="40 minutes" value={40} />
        <Picker.Item label="45 minutes" value={45} />
        <Picker.Item label="50 minutes" value={50} />
        <Picker.Item label="55 minutes" value={55} />
        <Picker.Item label="60 minutes" value={60} />
      </Picker>
      <Button title="Start" onPress={handleSubmit} />
    </View>
  );
};

export default SetMeditationDuration;
