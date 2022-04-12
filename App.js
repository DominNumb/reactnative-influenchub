import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import consoleText from './components/consoleTextComponent'

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false) //If is user Online
  const [screenSlide, setScreenSlide] = useState('login') //On what screen you should bee
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')

  //LogIn function finish
  const signIn = (userEmail) => {
    setEmail(userEmail)
    setScreenSlide('home')
  }
  //LogOut function finish
  const signOut = () => {
    setEmail('')
    setUsername('')
    setIsSignedIn(false)
    setScreenSlide('login')
  }
  //Registration function finish
  const registerDone = (userEmail) => {
    setEmail(userEmail)
    setScreenSlide('home')
  }

  const handleScreenSlide = (screen) => {
    if (screenSlide === screen) {
      if (screen === 'login') {
        if (isSignedIn === true) {
          setScreenSlide('home')
          return false
        }
      }
      return true
    } else {
      return false
    }
  }
  return (
    <>
      <View style={styles.container}>
        <HomeScreen
          userEmail={email}
          onLogout={signOut}
          visible={handleScreenSlide('home')}
        />
        <LoginScreen
          onLogin={signIn}
          onRegister={() => setScreenSlide('register')}
          visible={handleScreenSlide('login')}
        />
        <RegisterScreen
          onLogin={signOut}
          visible={handleScreenSlide('register')}
          onRegister={registerDone}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6817f',
  },
  text: {
    fontSize: 19,
    margin: 10,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fff',
  },
})
