import React from "react";
import { Card, Text } from "react-native-paper";
import { Entry } from "../utils/types";

const EntryCard = ({ entry }: { entry: Entry }) => {
  const formattedDateTime = entry.datetime.toLocaleString(); // Format the date and time

  return (
    <Card>
      <Card.Title title={entry.type} subtitle={formattedDateTime} />
      <Card.Content>
        <Text>{entry.text}</Text>
      </Card.Content>
    </Card>
  );
};

export default EntryCard;
