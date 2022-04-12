import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native'

export default function Button(props) {
  const {
    onPress,
    title = 'Save',
    bgcolor = 'black',
    textcolor = 'white',
    shadow = '#000',
  } = props
  const styles = StyleSheet.create({
    button: {
      marginTop: 15,
      borderRadius: 25,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      shadowColor: shadow,
      shadowOpacity: 0.5,
      elevation: 8,
      shadowRadius: 10,
      shadowOffset: { width: 1, height: 1 },
      backgroundColor: bgcolor,
      color: 'black',
    },
    text: {
      fontSize: 19,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: textcolor,
    },
  })

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
