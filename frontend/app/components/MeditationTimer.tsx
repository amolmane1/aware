import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useLocation, useNavigate } from "react-router-native";
import { formatTime } from "../utils/helper_functions";

const MeditationTimer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { duration } = location.state;
  const [elapsedTime, setElapsedTime] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isFinished, setIsFinished] = React.useState(false);

  const handleDiscard = () => {
    setIsPlaying(false);
    navigate("/");
  };

  const handleFinish = () => {
    setIsPlaying(false);
    navigate("/add-entry/meditation/add-notes", {
      state: { elapsedTime: elapsedTime },
    });
  };

  return (
    <View
    // style={styles.container}
    >
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={duration}
        colors={["#004777", "#007700"]}
        colorsTime={[duration, 0]}
        onComplete={() => {
          setIsFinished(true);
          return { shouldRepeat: false };
        }}
        updateInterval={1}
        onUpdate={(remainingTime) => {
          const elapsedTime = duration - remainingTime;
          setElapsedTime(elapsedTime);
        }}
      >
        {({ remainingTime, color }) => (
          <Text style={{ color, fontSize: 40 }}>
            {formatTime(remainingTime)}
          </Text>
        )}
      </CountdownCircleTimer>
      {!isFinished && isPlaying ? (
        <Button title="Pause" onPress={() => setIsPlaying(false)} />
      ) : (
        <View>
          {!isFinished && (
            <Button title="Play" onPress={() => setIsPlaying(true)} />
          )}
          <Button title="Discard" onPress={handleDiscard} />
          <Button title="Finish" onPress={handleFinish} />
        </View>
      )}
    </View>
  );
};

export default MeditationTimer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
