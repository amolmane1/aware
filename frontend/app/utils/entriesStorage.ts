import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entry } from "./types";

class EntriesStorage {
  private storageKey = "entries";

  async getAllEntries(): Promise<Entry[]> {
    try {
      const entries = await AsyncStorage.getItem(this.storageKey);
      return entries ? JSON.parse(entries) : [];
    } catch (error) {
      console.error("Error retrieving entries:", error);
      return [];
    }
  }

  async addEntry(entry: Entry): Promise<void> {
    try {
      const entries = await this.getAllEntries();
      entries.push(entry);
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
