import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native'
import TextS from '../components/TextComponent'
import Button from '../components/ButtonComponent'
import { authentication } from '../firebase/firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import consoleText from '../components/consoleTextComponent'

export default function RegisterScreen({ visible, onLogin, onRegister }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //Did MOUNT
  useEffect(() => {
    consoleText('Register screen MountedUp')
  }, [])

  //Register funct starting
  const RegisterUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        onRegister(email)
        setEmail('')
        setPassword('')
      })
      .catch((re) => {
        alert('Error: ' + re)
        return
      })
  }

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.container}>
        <TextS style={styles.nadpis} text="Registration" />
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.text}
          placeholder="Email"
          autoFocus={true}
        ></TextInput>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.text}
          placeholder="Password"
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          style={styles.text}
          placeholder="Confirm password /nepouzivat"
        ></TextInput>
        <Button
          onPress={() => RegisterUser()}
          bgcolor="#e76682"
          textcolor="#ffffff"
          title="Create Account"
        />
      </View>
      <View style={styles.registerview}>
        <Text style={styles.registertext2}>Already have account?</Text>
        <TouchableOpacity onPress={() => onLogin()}>
          <Text style={styles.registertext1}>Login here!</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

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
  nadpis: {
    fontSize: 39,
    margin: 45,
    lineHeight: 50,
    fontWeight: 'bold',
    letterSpacing: 0.3,
    color: '#ffaea6',
    shadowColor: 'black',
    shadowOpacity: 0.9,
  },
  registerview: {
    backgroundColor: '#e8637e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
    flexDirection: 'row',
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
})
