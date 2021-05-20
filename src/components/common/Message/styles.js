import { StyleSheet } from 'react-native'
import colors from '../../../assets/theme/colors'

export default StyleSheet.create({

  wrapper: {
    height: 40,
    borderRadius: 4,
    marginVertical: 5,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  retry: {
    color: colors.white,
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  message: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})