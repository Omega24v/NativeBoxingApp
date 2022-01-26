import { useNavigation } from '@react-navigation/native';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import tw from 'tailwind-rn';
import { msToHMS } from '../../utils/timeConverter';
import showAlert from '../Alert';

const TimerList = (props) => {
  const navigation = useNavigation();
  const timerList = props.timers;

  return (
    <View>
      <FlatList
        data={timerList}
        style={tw(`w-full px-2`)}
        keyExtractor={(item) => item.id}
        renderItem={({
          item: { name, rounds, roundTime, restTime, innerAlerts },
          item,
        }) => (
          <View
            style={tw(`flex-row justify-between border-2 rounded mb-2 p-2`)}
            key={item.key}
          >
            <View>
              <Text style={tw(`text-lg`)}>{name}</Text>
              <Text style={tw(`text-lg`)}>
                {rounds} Rounds of: {msToHMS(roundTime.time)}
              </Text>
              <Text style={tw(`text-lg`)}>
                Rest time: {msToHMS(restTime.time)}
              </Text>

              {innerAlerts ? (
                <Text style={tw(`text-lg`)}>Circle alerts: {innerAlerts}</Text>
              ) : null}
            </View>

            <View style={tw(`justify-center`)}>
              <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
                <Icon name="edit" size={30} type="font-awesome" />
              </TouchableOpacity>

              <TouchableOpacity>
                <Icon
                  name="times"
                  size={30}
                  type="font-awesome"
                  onPress={showAlert}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    currTimer: state.timerReducer.currTimer,
    timers: state.timerReducer.timers,
    intervalId: state.timerReducer.intervalId,
  };
}

export default connect(mapStateToProps)(TimerList);
