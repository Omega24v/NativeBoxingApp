import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { DEFAULT, ROUND } from '../../constatns/timerDefaultValues';
import { getTotalTime } from '../../utils/common';
import { msToHMS } from '../../utils/timeConverter';
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
  toggleEditTimer,
} from '../../../store/actions/timerActions';
import tw from 'tailwind-rn';
import {
  isInnerAlertsCircleFinished,
  isLastRound,
  isRestFinished,
  isWarningPhase,
} from '../../lib/timerCheck';
import TimerButton from './TimerButton';
import {
  preparationFinished,
  roundFinished,
  stopFight,
  warningFinished,
} from '../../lib/timerStart';

const Timer = (props) => {
  const [innerAlerts, setInnerAlerts] = useState(null);

  function startFight() {
    setInnerAlerts(getInnerAlerts() ? getFilteredAndMapInnerAlerts() : '');
    props.setIntervalCount(0);
    props.setPhaseTime(props.currTimer.roundTime.time);
    props.setCurrentPhase(ROUND);
  }

  useEffect(() => {
    if (innerAlerts) {
      if (isInnerAlertsCircleFinished(innerAlerts)) {
        resetInnerAlerts();
      }
    }

    if (preparationFinished(props)) {
      startFight();
    } else if (isWarningPhase(props)) {
      startWarning();
    } else if (roundFinished(props) || warningFinished(props)) {
      if (isLastRound(props)) {
        stopFight();
      } else {
        startRest();
      }
    } else if (isRestFinished(props)) {
      startRound();
    }
  }, [props.intervalCount]);

  function getFilteredAndMapInnerAlerts() {
    return getInnerAlerts()
      .filter((item) => item && +item > 0)
      .map((item) => {
        return { time: parseInt(item, 10), isActivated: false };
      });
  }

  function getInnerAlerts() {
    return props.currTimer.innerAlerts
      ? props.currTimer.innerAlerts.split(',')
      : null;
  }

  function resetInnerAlerts() {
    if (!innerAlerts) {
      return;
    }
    let mapAlerts = innerAlerts.map((item) => {
      return { ...item, isActivated: false };
    });
    setInnerAlerts(mapAlerts);
  }

  return (
    <View style={tw(`justify-evenly`)}>
      <View style={tw(`items-center mb-4`)}>
        <Text style={tw(`text-xl font-bold`)}>Current Round</Text>
        <Text style={style.timeCounter}>
          {props.currentRound > 9
            ? props.currentRound
            : `0${props.currentRound}`}
        </Text>
      </View>

      <View style={tw(`items-center mb-4`)}>
        <Text style={tw(`text-xl font-bold`)}>Time Left</Text>
        <Text style={style.timeCounter}>
          {props.currentPhase === DEFAULT
            ? msToHMS(getTotalTime(props.currTimer))
            : msToHMS(props.phaseTime)}
        </Text>
      </View>

      <TimerButton />
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

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

const style = StyleSheet.create({
  timeCounter: {
    fontSize: 60,
  },
});
