import { StyleSheet } from 'react-native'
import colors from '../../../assets/theme/colors'

export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  wrapper: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 8,
    paddingHorizontal: 5
  },
  textInput: {
    flex: 1,
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12
  }
})