import React from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-native";
import EntriesList from "./EntriesList";
import CustomAppBar from "./CustomAppBar";
import CreateEntry from "./CreateEntry";

const App: React.FC = () => {
  return (
    <>
      <CustomAppBar />
      <Routes>
        <Route path="/" element={<EntriesList />} />
        <Route path="/create-entry" element={<CreateEntry />} />
      </Routes>
    </>
  );
};

export default App;
