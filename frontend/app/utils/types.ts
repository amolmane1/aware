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
