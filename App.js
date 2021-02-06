import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , ImageBackground, Button, Alert, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('../BlueMagix/assets/apartment1.jpeg')} style={styles.container}>
      <Text style={styles.text}>App Name</Text>
      <StatusBar style="auto" />
      <View style={styles.button}>
        <LoginButton style={styles.bottom} text='Login' color='#696969' onPress={() => Alert.alert('Pressed Login')}/>
      </View>
      <View style={styles.signUp}>
      <SignUpButton style={styles.bottom} text='SignUp' color='#003C71' onPress={() => Alert.alert('Pressed Sign Up')}/>
      </View>
    </ImageBackground>
  );
}

const LoginButton = props => {
  const content = (
    <View style={[styles.button, {backgroundColor: props.color}]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const SignUpButton = props => {
  const content = (
    <View style={[styles.button, {backgroundColor: props.color}]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    position: 'absolute',
    width: 150,
    padding: 15,
    bottom: 40,
    left:-20,
    borderRadius: 15,
    alignItems: 'center'
  },
  signUp: {
    position: 'absolute',
    width: 150,
    padding: 15,
    bottom: 40,
    left:190,
    borderRadius: 15,
    alignItems: 'center'
  },
})