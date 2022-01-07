import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-rn';
import TimerList from './components/Timer/TimerList';

const Timer = () => {
  return (
    <SafeAreaView style={tw('flex-1 items-center w-full')}>
      <View style={tw('my-5')}>
        <Text style={tw('text-2xl')}>Timer Name</Text>
      </View>

      <View style={tw('items-center')}>
        <Text>Current Round</Text>
        <View style={tw(`flex-row`)}>
          <Text style={styles.bigCounter}>00</Text>
        </View>
      </View>

      <View style={tw('items-center')}>
        <Text>Total Time</Text>
        <View>
          <Text style={styles.bigCounter}>00:00</Text>
        </View>
      </View>

      <View style={tw('flex-row items-center mb-5')}>
        <TouchableOpacity
          style={tw('items-center bg-green-500 mr-2 px-6 py-3 rounded-full')}
        >
          <Text style={tw('text-white text-xl')}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw('items-center bg-yellow-700 px-6 py-3 rounded-full')}
        >
          <Text style={tw('text-white text-xl')}>Edit/Save</Text>
        </TouchableOpacity>
      </View>

      <TimerList />
    </SafeAreaView>
  );
};

export default Timer;

const styles = StyleSheet.create({
  bigCounter: {
    fontSize: 70,
  },
});
