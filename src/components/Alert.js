import { Alert } from 'react-native';

const showAlert = () => {
  Alert.alert('Delete this timer?', '', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);
};

export default showAlert;
