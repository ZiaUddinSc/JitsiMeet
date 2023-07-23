import React, {useState} from 'react';

// Import the essential components from react-native
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  PermissionsAndroid,
} from 'react-native';

//Import Jitsi Meet
import VideoCall from './VideoCall';
// Function for creating button
export default function App() {
  const [joinMeeting, setJoinMetting] = useState(false);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
        },
      );
      // If CAMERA Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  return (
    <View style={styles.container}>
      {joinMeeting ? (
        <VideoCall />
      ) : (
        <Button
          // Some properties given to Button
          title="Join Meeting"
          onPress={() => {
            // requestCameraPermission();
            setJoinMetting(true);
          }}
        />
      )}
    </View>
  );
}

// Some styles given to button
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#71EC4C',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
