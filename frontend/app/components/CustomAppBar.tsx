import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigate } from "react-router-native";
import ChooseEntryTypeModal from "./ChooseEntryTypeModal";

const CustomAppBar = () => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const navigate = useNavigate();

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Entries List" />
        <Appbar.Action
          icon="plus"
          // onPress={() => navigate("/create-entry")}
          onPress={showModal}
        />
      </Appbar.Header>
      <ChooseEntryTypeModal visible={visible} hideModal={hideModal} />
    </View>
  );
};

export default CustomAppBar;
