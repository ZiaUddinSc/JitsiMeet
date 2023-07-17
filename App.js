import React,{useState} from 'react';
  
// Import the essential components from react-native
import {
    StyleSheet, Button, View, SafeAreaView,
    Text, Alert
} from 'react-native';
  
//Import Jitsi Meet
import VideoCall from './VideoCall'
// Function for creating button
export default function App() {
  const [joinMeeting,setJoinMetting]=useState(false)
    return (
        <View style={styles.container}>
             {joinMeeting
             ?
             <VideoCall/>
             :
            <Button
  
                // Some properties given to Button
                title="Join Meeting"
                onPress={() => setJoinMetting(true)}
            />}
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
    },
});