import { REST, ROUND, WARNING } from '../constatns/timerDefaultValues';

export const isRoundPhase = (props) => props.currentPhase === ROUND;

export const isLastRound = (props) =>
  props.currentRound === props.currTimer.rounds;

export const isLastRoundSecond = (props) =>
  props.intervalCount === props.currTimer.roundTime.time;

export const isRestFinished = (props) => {
  const isRestPhase = props.currentPhase === REST;
  const isRestFinished = props.intervalCount === props.currTimer.restTime.time;
  const isRestNotSet = props.currTimer.restTime.time === 0;
  return isRestPhase && (isRestFinished || isRestNotSet);
};

export const isInnerAlerts = (props, alert, prevAlertTime) => {
  return (
    props.intervalCount !== 0 &&
    (props.crurrentPhase === ROUND || props.currentPhase === WARNING) &&
    !alert.isActivated &&
    (props.intervalCount / 1000) % (alert.time + (prevAlertTime || 0)) === 0
  );
};

export const isInnerAlertsCircleFinished = (innerAlerts) => {
  return (
    innerAlerts.filter((alert) => {
      return !alert.isActivated;
    }).length === 0
  );
};

export const isWarningPhase = (props) => {
  const isWarningTime =
    props.intervalCount ===
    props.currTimer.roundTime.time - props.currTimer.warningTime.time;
  const isWarningSet = props.currTimer.warningTime.time !== 0;
  return isRoundPhase(props) && isWarningTime && isWarningSet;
};
