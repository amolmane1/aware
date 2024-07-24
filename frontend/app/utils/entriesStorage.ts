import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entry } from "./types";

class EntriesStorage {
  private storageKey = "entries";

  async getAllEntries(): Promise<Entry[]> {
    try {
      const entries = await AsyncStorage.getItem(this.storageKey);
      if (entries) {
        const parsedEntries: Entry[] = JSON.parse(entries);
        parsedEntries.forEach((entry) => {
          entry.datetime = new Date(entry.datetime);
        });
        return parsedEntries;
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error retrieving entries:", error);
      return [];
    }
  }

  async addEntry(entry: Omit<Entry, "id">): Promise<void> {
    try {
      const entries = await this.getAllEntries();
      const newEntry: Entry = {
        ...entry,
        id: (entries.length + 1).toString(),
      };
      entries.push(newEntry);
      await AsyncStorage.setItem(this.storageKey, JSON.stringify(entries));
    } catch (error) {
      console.error("Error adding entry:", error);
    }
  }

  async updateEntry(updatedEntry: Entry): Promise<void> {
    try {
      const entries = await this.getAllEntries();
      const index = entries.findIndex((entry) => entry.id === updatedEntry.id);
      if (index !== -1) {
        entries[index] = updatedEntry;
        await AsyncStorage.setItem(this.storageKey, JSON.stringify(entries));
      }
    } catch (error) {
      console.error("Error updating entry:", error);
    }
  }

  async deleteEntry(entryId: string): Promise<void> {
    try {
      const entries = await this.getAllEntries();
      const filteredEntries = entries.filter((entry) => entry.id !== entryId);
      await AsyncStorage.setItem(
        this.storageKey,
        JSON.stringify(filteredEntries)
      );
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  }

  async deleteAllEntries(): Promise<void> {
    try {
      await AsyncStorage.removeItem(this.storageKey);
    } catch (error) {
      console.error("Error deleting all entries:", error);
    }
  }
}

export default EntriesStorage;
