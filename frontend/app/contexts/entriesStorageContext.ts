import { createContext } from "react";
import EntriesStorage from "../utils/entriesStorage";

const EntriesStorageContext = createContext<EntriesStorage>(
  new EntriesStorage()
);

export default EntriesStorageContext;
