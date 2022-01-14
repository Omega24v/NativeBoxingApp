import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import tw from 'tailwind-rn';
import { DEFAULT } from '../../constatns/timerDefaultValues';
import { getTotalTime } from '../../utils/common';
import { msToHMS } from '../../utils/timeConverter';

const TimerTime = () => {
  const navigation = useNavigation();
  const timerState = useSelector((state) => state.timerReducer);

  return (
    <View style={tw(`justify-evenly`)}>
      <View style={tw(`items-center mb-4`)}>
        <Text style={tw(`text-xl font-bold`)}>Current Round</Text>
        <Text style={[tw(``), style.timeCounter]}>
          {timerState.currentRound > 9
            ? timerState.currentRound
            : `0${timerState.currentRound}`}
        </Text>
      </View>

      <View style={tw(`items-center mb-4`)}>
        <Text style={tw(`text-xl font-bold`)}>Time Left</Text>
        <Text style={style.timeCounter}>
          {timerState.currentPhase === DEFAULT
            ? msToHMS(getTotalTime(timerState.currTimer))
            : msToHMS(timerState.phaseTime)}
        </Text>
      </View>

      <View style={tw(`w-full flex-row justify-evenly`)}>
        <TouchableOpacity style={tw(`bg-green-600 w-24 py-3`)}>
          <Text style={tw(`text-center text-white font-bold`)}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw(`bg-yellow-400 w-24 py-3`)}>
          <Text
            style={tw(`text-center text-white font-bold`)}
            onPress={() => navigation.navigate('Modal')}
          >
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TimerTime;

const style = StyleSheet.create({
  timeCounter: {
    fontSize: 60,
  },
});
