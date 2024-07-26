import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

const formatTime = (remainingTime: number) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${paddedSeconds}`;
};

const Timer = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <View
    // style={styles.container}
    >
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={100}
        colors={["#004777", "#007700"]}
        colorsTime={[100, 0]}
        // onComplete={() => ({ shouldRepeat: false, delay: 2 })}
        updateInterval={1}
      >
        {({ remainingTime, color }) => (
          <Text style={{ color, fontSize: 40 }}>
            {formatTime(remainingTime)}
          </Text>
        )}
      </CountdownCircleTimer>
      <Button
        title="Toggle Playing"
        onPress={() => setIsPlaying((prev) => !prev)}
      />
    </View>
  );
};

export default Timer;

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
