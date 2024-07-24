import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigate } from "react-router-native";

const CustomAppBar = () => {
  const navigate = useNavigate();
  return (
    <Appbar.Header>
      <Appbar.Content title="Entries List" />
      <Appbar.Action icon="plus" onPress={() => navigate("/create-entry")} />
    </Appbar.Header>
  );
};

export default CustomAppBar;
