import React from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-native";
import EntriesList from "./EntriesList";
import CustomAppBar from "./CustomAppBar";
import AddQuestionEntry from "./AddQuestionEntry";
import ChooseEntryType from "./ChooseEntryType";
import AddMusingEntry from "./AddMusingEntry";
import AddInsightEntry from "./AddInsightEntry";
import SetMeditationDuration from "./SetMeditationDuration";
import MeditationTimer from "./MeditationTimer";
import AddMeditationEntry from "./AddMeditationEntry";

const App: React.FC = () => {
  return (
    <>
      <CustomAppBar />
      <Routes>
        <Route path="/" element={<EntriesList />} />
        <Route path="/choose-entry-type" element={<ChooseEntryType />} />
        <Route path="/add-entry/question" element={<AddQuestionEntry />} />
        <Route path="/add-entry/musing" element={<AddMusingEntry />} />
        <Route path="/add-entry/insight" element={<AddInsightEntry />} />
        <Route
          path="/add-entry/meditation"
          element={<SetMeditationDuration />}
        />
        <Route
          path="/add-entry/meditation/meditation-timer"
          element={<MeditationTimer />}
        />
        <Route
          path="/add-entry/meditation/add-notes"
          element={<AddMeditationEntry />}
        />
      </Routes>
    </>
  );
};

export default App;
