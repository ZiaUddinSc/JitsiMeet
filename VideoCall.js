import React, {useEffect} from 'react';
import JitsiMeet, {JitsiMeetView} from 'react-native-jitsi-meet';
import {PermissionsAndroid, StatusBar} from 'react-native';

function VideoCall() {
  useEffect(() => {
    setTimeout(() => {
      const userInfo = {
        displayName: 'User',
        email: 'user@example.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      JitsiMeet.call('https://meet.jit.si/OwnWorkshopsBatLoudly', userInfo);
    }, 500);
  }, []);

  useEffect(() => {
    return () => {
      JitsiMeet.endCall();
    };
  });

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

  function onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
    console.log(JSON.stringify(nativeEvent));
  }

  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log(JSON.stringify(nativeEvent));
  }

  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log(JSON.stringify(nativeEvent));
  }
  return (
    <JitsiMeetView
      onConferenceTerminated={e => onConferenceTerminated(e)}
      onConferenceJoined={e => onConferenceJoined(e)}
      onConferenceWillJoin={e => onConferenceWillJoin(e)}
      style={{flex: 1, height: '100%', width: '100%', backgroundColor: 'black'}}
    />
  );
}
export default VideoCall;
