import {
  DEFAULT,
  PREPARE,
  REST,
  ROUND,
  WARNING,
} from '../constatns/timerDefaultValues';
import { isRoundPhase } from './timerCheck';

export const handleTimer = (props) => {
  if (props.intervalId) {
    props.pause();
    clearInterval(props.intervalId);
    props.setIntervalId(0);
    return;
  }

  props.start();

  if (props.currentPhase === DEFAULT) {
    if (props.currTimer.prepareTime.time === 0) {
      startFight();
    } else {
      props.setCurrentPhase(PREPARE);
      props.setPhaseTime(props.currTimer.prepareTime.time);
    }
  }

  const newIntervalId = setInterval(() => {
    props.setIntervalCount(1000);
    props.countPhaseTime(1000);
  }, 1000);

  props.setIntervalId(newIntervalId);
};

export const stopResetAndTimer = (props) => {
  props.stop();
  clearInterval(props.intervalId);
  props.resetTimer();
};

export const stopFight = () => {
  setTimeout(() => {
    stopResetAndTimer();
  }, 0);
};

export const preparationFinished = (props) =>
  props.currentPhase === PREPARE &&
  props.intervalCount === props.currTimer.prepareTime.time;

export const startWarning = (props) => props.setCurrentPhase(WARNING);

export const startRest = () => {
  props.setIntervalCount(0);
  props.setPhaseTime(props.currTimer.restTime.time);
  props.setCurrentPhase(REST);
};

export const startRound = () => {
  props.setIntervalCount(0);
  props.setPhaseTime(props.currTimer.roundTime.time);
  props.setCurrentPhase(ROUND);
  props.setCurrentRound();
};

export const roundFinished = (props) =>
  isRoundPhase(props) && props.currTimer.roundTime.time === 0;

export const warningFinished = (props) => {
  const isWarningPhase = props.currentPhase === WARNING;
  const isRoundFinished =
    props.intervalCount === props.currTimer.roundTime.time;
  return isWarningPhase && isRoundFinished;
};
