import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import tw from 'tailwind-rn';
import {
  countPhaseTime,
  pauseTimer,
  resetTimer,
  setCurrentPhase,
  setCurrentRound,
  setDefaultValues,
  setIntervalCount,
  setIntervalId,
  setPhaseTime,
  startTimer,
  stopTimer,
  toggleAddTimer,
} from '../../../store/actions/timerActions';
import { handleTimer, stopResetAndTimer } from '../../lib/timerStart';

const TimerButton = (props) => {
  const navigation = useNavigation();

  return (
    <View style={tw(`w-full flex-row`)}>
      {props.isRunning ? (
        <TouchableOpacity
          onPress={() => stopResetAndTimer(props)}
          style={tw(`bg-red-600 w-24 mr-3 py-3 rounded-lg`)}
        >
          <Text style={tw(`text-center text-white font-bold`)}>Stop</Text>
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity
        onPress={() => handleTimer(props)}
        style={tw(`bg-green-600 w-24 mr-3 py-3 rounded-lg`)}
      >
        <Text style={tw(`text-center text-white font-bold`)}>
          {props.isRunning ? `Pause` : `Start`}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={tw(`bg-yellow-400 w-24 py-3 rounded-lg`)}>
        <Text
          style={tw(`text-center text-white font-bold`)}
          onPress={() => navigation.navigate('Modal')}
        >
          Edit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    isEdit: state.timerReducer.isEdit,
    isRunning: state.timerReducer.isRunning,
    currTimer: state.timerReducer.currTimer,
    currentRound: state.timerReducer.currentRound,
    currentPhase: state.timerReducer.currentPhase,
    phaseTime: state.timerReducer.phaseTime,
    fullTime: state.timerReducer.fullTime,
    intervalCount: state.timerReducer.intervalCount,
    intervalId: state.timerReducer.intervalId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    start: () => dispatch(startTimer()),
    pause: () => dispatch(pauseTimer()),
    stop: () => dispatch(stopTimer()),
    toggleEditTimer: () => dispatch(toggleEditTimer()),
    toggleAddTimer: () => dispatch(toggleAddTimer()),
    setDefaultValues: () => dispatch(setDefaultValues()),
    resetTimer: () => dispatch(resetTimer()),
    setIntervalCount: (count) => dispatch(setIntervalCount(count)),
    setIntervalId: (id) => dispatch(setIntervalId(id)),
    setPhaseTime: (time) => dispatch(setPhaseTime(time)),
    countPhaseTime: (time) => dispatch(countPhaseTime(time)),
    setCurrentPhase: (phase) => dispatch(setCurrentPhase(phase)),
    setCurrentRound: () => dispatch(setCurrentRound()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerButton);
