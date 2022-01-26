import React, { View, Text } from 'react-native';
import TimerList from '../components/timer/TimerList';
import tw from 'tailwind-rn';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import Timer from '../components/timer/Timer';

const HomeScreen = () => {
  const timerState = useSelector((state) => state.timerReducer);

  return (
    <SafeAreaView style={tw(`h-full justify-between`)}>
      <View style={tw(`items-center`)}>
        <Text style={tw(`text-3xl mt-4 mb-10 uppercase font-bold`)}>
          {timerState.currTimer.name}
        </Text>
        <Timer />
      </View>

      <TimerList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;
