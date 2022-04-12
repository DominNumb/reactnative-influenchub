import TimeFunc from './TimeComponent'
import * as Device from 'expo-device'

const consoleText = (text) => {
  console.log(TimeFunc(Device.deviceName) + text)
}

export default consoleText
