export interface BaseEntry {
  id: string;
  text: string;
  datetime: Date;
}

export interface BasicEntry extends BaseEntry {
  type: "Insight" | "Question" | "Musing";
}

export interface MeditationEntry extends BaseEntry {
  type: "Meditation";
  duration: number;
}

export type Entry = BasicEntry | MeditationEntry;

export type MeditationEntryWithoutId = Omit<MeditationEntry, "id">;
export type BasicEntryWithoutId = Omit<BasicEntry, "id">;
// export type EntryWithoutId = Omit<Entry, "id">;
export type EntryWithoutId = BasicEntryWithoutId | MeditationEntryWithoutId;

import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  "Add Entry": undefined;
  "Add Musing": undefined;
  "Add Question": undefined;
  "Add Insight": undefined;
  "Set Meditation Duration": undefined;
  "Meditation Timer": { duration: number };
  "Add Meditation": { elapsedTime: number };
};
export type TimerProps = NativeStackScreenProps<
  RootStackParamList,
  "Meditation Timer"
>;
export type AddMeditationProps = NativeStackScreenProps<
  RootStackParamList,
  "Add Meditation"
>;
