import React from "react";
import { Card, Text } from "react-native-paper";
import { Entry } from "../utils/types";
import { formatTime } from "../utils/helper_functions";

const EntryCard = ({ entry }: { entry: Entry }) => {
  const formattedDateTime = entry.datetime.toLocaleString(); // Format the date and time

  return (
    <Card>
      <Card.Title title={entry.type} subtitle={formattedDateTime} />
      <Card.Content>
        {entry.type === "Meditation" && (
          <Text>Duration: {formatTime(entry.duration)}</Text>
        )}
        <Text>{entry.text}</Text>
      </Card.Content>
    </Card>
  );
};

export default EntryCard;
