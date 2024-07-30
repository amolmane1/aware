import React from "react";
import { View, Text, Button, Image } from "react-native";
import EntriesList from "./EntriesList";
import AddQuestionEntry from "./AddQuestionEntry";
import ChooseEntryType from "./ChooseEntryType";
import AddMusingEntry from "./AddMusingEntry";
import AddInsightEntry from "./AddInsightEntry";
import SetMeditationDuration from "./SetMeditationDuration";
import MeditationTimer from "./MeditationTimer";
import AddMeditationEntry from "./AddMeditationEntry";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../utils/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={EntriesList}
        options={({ navigation }) => ({
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("Add Entry")}
              title="Add"
              // color="#fff"
            />
          ),
        })}
      />
      <Stack.Screen name="Add Entry" component={ChooseEntryType} />
      <Stack.Screen name="Add Musing" component={AddMusingEntry} />
      <Stack.Screen name="Add Question" component={AddQuestionEntry} />
      <Stack.Screen name="Add Insight" component={AddInsightEntry} />
      <Stack.Screen
        name="Set Meditation Duration"
        component={SetMeditationDuration}
      />
      <Stack.Screen name="Meditation Timer" component={MeditationTimer} />
      <Stack.Screen name="Add Meditation" component={AddMeditationEntry} />
    </Stack.Navigator>
  );
};

export default App;
