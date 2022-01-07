import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-rn';

const DATA = [
  {
    id: 1,
    titleTimer: 'New Timer 1',
    rounds: '12',
    totalTime: '03:00',
    restTime: '00:20',
  },
  {
    id: 2,
    titleTimer: 'New Timer 2',
    rounds: '10',
    totalTime: '02:00',
    restTime: '00:25',
  },
  {
    id: 3,
    titleTimer: 'New Timer 3',
    rounds: '06',
    totalTime: '03:00',
    restTime: '00:15',
  },
];

const TimerList = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={DATA}
      style={tw(`w-full px-2`)}
      keyExtractor={(item) => item.id}
      renderItem={({
        item: { titleTimer, rounds, totalTime, restTime },
        item,
      }) => (
        <View
          style={tw('flex-row justify-between border-2 rounded mb-2 p-2')}
          key={item.key}
        >
          <View>
            <Text style={tw(`text-lg`)}>{titleTimer}</Text>
            <Text style={tw(`text-lg`)}>
              {rounds} Rounds of: {totalTime}
            </Text>
            <Text style={tw(`text-lg`)}>Rest time: {restTime}</Text>
          </View>
          <View style={tw(`justify-center`)}>
            <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
              <Icon name="edit" size={30} type="font-awesome" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="times" size={30} type="font-awesome" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default TimerList;

const styles = StyleSheet.create({});
