import { Text, View } from "react-native";
import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import App from "./components/App";
import { NativeRouter } from "react-router-native";
import EntriesStorageContext from "./contexts/entriesStorageContext";
import EntriesStorage from "./utils/entriesStorage";

const entriesStorage: EntriesStorage = new EntriesStorage();

export default function Main() {
  return (
    <PaperProvider>
      <NativeRouter>
        <EntriesStorageContext.Provider value={entriesStorage}>
          <App />
        </EntriesStorageContext.Provider>
      </NativeRouter>
    </PaperProvider>
  );
}
