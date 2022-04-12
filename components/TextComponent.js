import { Text, StyleSheet } from 'react-native'

const TextS = ({ text = 'text', style = styles.text, numlines = 1 }) => {
  return (
    <Text style={style} numberOfLines={numlines} adjustsFontSizeToFit>
      {text}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 19,
    margin: 10,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000',
  },
})

export default TextS
