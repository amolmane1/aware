import React from "react";
// import { View, Text } from "react-native";
import { Card, Text } from "react-native-paper";
import { Entry } from "../utils/types";

const EntryCard = ({ entry }: { entry: Entry }) => {
  return (
    <Card>
      <Card.Title title={entry.type} subtitle={entry.datetime.toDateString()} />
      <Card.Content>
        <Text>{entry.text}</Text>
      </Card.Content>
    </Card>
  );
};

export default EntryCard;
