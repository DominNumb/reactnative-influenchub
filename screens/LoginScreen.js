import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  Modal,
  Text,
  TouchableOpacity,
} from 'react-native'
import TextS from '../components/TextComponent' //TextS is just my own basic Text from React Native but with adjusts Font
import Button from '../components/ButtonComponent' //Better my own button
import { useRef } from 'react/cjs/react.development'
import * as Device from 'expo-device'
import consoleText from '../components/consoleTextComponent'

//Firebase and Firestore
import { signInWithEmailAndPassword } from 'firebase/auth'
import { authentication } from '../firebase/firebase-config'

export default function LoginScreen({ onLogin, visible, onRegister }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nextInput = useRef()
  const mobileName = Device.deviceName

  //Did MOUNT
  useEffect(() => {
    consoleText('Login screen MountedUp')
  }, [])

  //LogIn function starting
  const handleLogin = () => {
    //Small log, DELETE IN PRODUCTION
    consoleText('Login button was pressed!')
    consoleText('Email: ' + email)
    consoleText('Password: ' + password)

    if (email.length > 5 && password.length > 5) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((re) => {
          onLogin(email)
          setPassword('')
        })
        .catch((re) => {
          alert(re)
          consoleText(re)
          return
        })
    } else {
      consoleText('Email or Password is lower than 5 letters')
    }
  }

  //DOM
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.container}>
        <View>
          <TextS style={styles.nadpis} text="InfluencHub" />
        </View>
        <TextInput
          style={styles.text}
          placeholder="Email@gmail.com"
          onChangeText={setEmail}
          value={email}
          returnKeyType="next"
          autoFocus={true}
          onSubmitEditing={() => {
            nextInput.current.focus()
          }}
          blurOnSubmit={false}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.text}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          ref={nextInput}
        />
        <Button
          title="Login"
          bgcolor="#e76682"
          textcolor="#ffffff"
          onPress={() => handleLogin()}
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.registerview} adju>
        <Text style={styles.registertext2}>You don't have an account?</Text>
        <TouchableOpacity onPress={() => onRegister()}>
          <Text style={styles.registertext1}>Register here!</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

//CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8637e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 19,
    margin: 10,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fff',
  },
  registertext1: {
    fontSize: 14,
    margin: 5,
    paddingBottom: 30,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    alignContent: 'center',
    color: '#685ea4',
  },
  registertext2: {
    fontSize: 14,
    margin: 5,
    paddingBottom: 30,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    alignContent: 'center',
    color: '#fff',
  },
  registerview: {
    backgroundColor: '#e8637e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
    flexDirection: 'row',
  },
  nadpis: {
    fontSize: 49,
    margin: 40,
    lineHeight: 50,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#ffaea6',
    shadowColor: 'black',
    shadowOpacity: 0.9,
  },
})
