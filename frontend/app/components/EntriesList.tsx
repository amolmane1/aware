import React, { useContext, useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import EntryCard from "./EntryCard";
import { Entry } from "../utils/types";
import EntriesStorageContext from "../contexts/entriesStorageContext";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flexGrow: 1,
  },
});

const EntriesList = () => {
  const entriesStorage = useContext(EntriesStorageContext);
  const navigate = useNavigate();
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const fetchedEntries = await entriesStorage.getAllEntries();
        const sortedEntries = fetchedEntries.sort(
          (a, b) => b.datetime.getTime() - a.datetime.getTime()
        );
        setEntries(sortedEntries);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };

    fetchEntries();
  }, []);

  return (
    <View style={styles.container}>
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
