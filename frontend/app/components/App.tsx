import React from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-native";
import EntriesList from "./EntriesList";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<EntriesList />} />
    </Routes>
  );
};

export default App;
