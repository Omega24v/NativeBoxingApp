import { View, StyleSheet, Text } from 'react-native';
import TimerList from '../components/TimerList';
import tw from 'tailwind-rn';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import TimerTime from '../components/timer/TimerTime';

const HomeScreen = () => {
  const timerState = useSelector((state) => state.timerReducer);

  // console.log(timerState);

  return (
    <SafeAreaView style={tw(`h-full justify-between`)}>
      <View style={tw(`items-center`)}>
        <Text style={tw(`text-3xl mt-4 mb-10 uppercase font-bold `)}>
          {timerState.currTimer.name}
        </Text>
        <TimerTime />
      </View>

      <TimerList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;
