import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TimerList from '../components/TimerList';
import tw from 'tailwind-rn';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={tw(`items-center`)}>
        <Text style={tw(`text-3xl my-4`)}>Timer Title</Text>

        <View style={tw(`flex-row w-full justify-evenly mb-4`)}>
          <View style={tw(`items-center`)}>
            <Text style={tw(`text-2xl`)}>Current Round</Text>
            <Text style={tw(`text-3xl text-center`)}>12</Text>
          </View>

          <View>
            <Text style={tw(`text-2xl`)}>Time Left</Text>
            <Text style={tw(`text-3xl text-center`)}>03:00</Text>
          </View>
        </View>
      </View>

      <TimerList />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
