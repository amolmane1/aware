import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigate } from "react-router-native";

const CustomAppBar = () => {
  const navigate = useNavigate();

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Entries List" />
        <Appbar.Action
          icon="plus"
          onPress={() => navigate("/choose-entry-type")}
        />
      </Appbar.Header>
    </View>
  );
};

export default CustomAppBar;
