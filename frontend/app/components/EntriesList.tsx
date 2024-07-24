import React from "react";
import { FlatList, View, Text } from "react-native";
import EntryCard from "./EntryCard";
import { Entry } from "../utils/types";

const entries: Entry[] = [
  {
    id: "1",
    datetime: new Date("2024-10-07T17:00:00Z"),
    type: "insight",
    text: "First entry",
  },
  {
    id: "2",
    datetime: new Date("2024-10-08T18:00:00Z"),
    type: "meditation",
    text: "Second entry",
  },
  {
    id: "3",
    datetime: new Date("2024-10-09T19:00:00Z"),
    type: "question",
    text: "Third entry",
  },
];

const EntriesList = () => {
  return (
    <View>
      <FlatList
        data={entries}
        renderItem={({ item }: { item: Entry }) => <EntryCard entry={item} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No entries found.</Text>}
      />
    </View>
  );
};

export default EntriesList;
