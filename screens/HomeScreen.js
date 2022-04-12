import React, { useState, useEffect } from 'react'
import { StyleSheet, View, SafeAreaView, Modal } from 'react-native'
import TextS from '../components/TextComponent'
import Button from '../components/ButtonComponent'
import * as Device from 'expo-device'
import consoleText from '../components/consoleTextComponent'

//Firebase and Firestore imports
import { authentication } from '../firebase/firebase-config'
import { signOut } from 'firebase/auth'

export default function HomeScreen({ visible, onLogout, userEmail }) {
  //Did MOUNT
  useEffect(() => {
    consoleText('Home screen MountedUp')
  }, [])

  //Logout function starting
  const logOut = () => {
    signOut(authentication)
      .then(() => {
        alert('SignOut successful!')
        onLogout()
      })
      .catch((er) => alert(er))
  }

  //DOM
  return (
    <>
      <Modal visible={visible} animationType="slide">
        <SafeAreaView style={styles.header}>
          <TextS
            style={styles.nadpis}
            numlines={2}
            text="Welcome on HomeScreen"
          />
          <TextS style={styles.text} text={userEmail} />
          <Button
            title="Logout"
            bgcolor="#ba6967"
            textcolor="white"
            onPress={() => logOut()}
          />
        </SafeAreaView>
      </Modal>
    </>
  )
}

//CSS
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#e6817f',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    fontSize: 40,
    margin: 40,
    lineHeight: 50,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fbc17d',
    shadowColor: 'black',
    shadowOpacity: 10,
  },
})
